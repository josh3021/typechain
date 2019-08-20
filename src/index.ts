import * as Crypto from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index: number, previousHash: string, data: string, timestamp: number): string =>
    Crypto.SHA256(index + previousHash + data + timestamp).toString();

  static validateStructure = (anyBlock: Block): boolean =>
    typeof anyBlock.index === "number" &&
    typeof anyBlock.hash === "string" &&
    typeof anyBlock.previousHash === "string" &&
    typeof anyBlock.data === "string" &&
    typeof anyBlock.timestamp === "number";
  
  constructor (index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "kindOfHash", "", "SuperDummyData", 1111111);
Object.freeze(genesisBlock);

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const latestBlock: Block = getLatestBlock();
  const newIndex: number = latestBlock.index + 1;
  const previousHash: string = latestBlock.hash;
  const newTimestamp: number = getTimestamp();
  const newHash = Block.calculateBlockHash(newIndex, previousHash, data, newTimestamp);

  const newBlock: Block = new Block(newIndex, newHash, previousHash, data, newTimestamp);
  Object.freeze(newBlock);

  addBlockToChain(newBlock);
  return newBlock;
}

const validateBlock = (latestBlock: Block, newBlock: Block): boolean =>
  Block.validateStructure(newBlock) &&
  latestBlock.index + 1 === newBlock.index &&
  latestBlock.hash === newBlock.previousHash &&
  newBlock.hash === Block.calculateBlockHash(newBlock.index, newBlock.previousHash, newBlock.data, newBlock.timestamp) &&
  Math.ceil(Math.log10(newBlock.timestamp + 1)) === 10 && // timestamp must be 10 digits
  newBlock.timestamp > 0 // timestamp must not be minus value

const addBlockToChain = (newBlock: Block): void => {
  const latestBlock: Block = getLatestBlock();

  if (!validateBlock(latestBlock, newBlock)) {
    return console.error('Error: Invalid Block!');
  }

  blockchain.push(newBlock);
}

createNewBlock("blabla");
console.log(getBlockchain());

createNewBlock("blabla2");
console.log(getBlockchain());

export {};