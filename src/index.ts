import * as Crypto from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (index: number, prevHash: string, data: string, timestamp: number): string => Crypto.SHA256(index + prevHash + data + timestamp).toString();

  constructor (index: number, hash: string, prevHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock = new Block(0, "kindOfHash", "", "SuperDummyData", 1111111);
Object.freeze(genesisBlock);

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getTimestamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(getBlockchain());
console.log(getLatestBlock());
console.log(getTimestamp());

export {};