class Block {
    constructor(index, hash, prevHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "kindOfHash", "", "SuperDummyData", 1111111);
const dummyBlock = new Block(1, "differnetHash", "kindOfHash", "SumperDuperDummyData", 2222222);
const blockchain = [genesisBlock, dummyBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map