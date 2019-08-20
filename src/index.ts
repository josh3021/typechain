class Block {
  public index: number;
  public hash: string;
  public prevHash: string;
  public data: string;
  public timestamp: number;

  constructor (index: number, hash: string, prevHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.prevHash = prevHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock = new Block(0, "kindOfHash", "", "SuperDummyData", 1111111);
const dummyBlock = new Block(1, "differnetHash", "kindOfHash", "SumperDuperDummyData", 2222222);

const blockchain: [Block, Block] = [genesisBlock, dummyBlock];

console.log(blockchain);

export {};