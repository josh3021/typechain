"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Crypto = __importStar(require("crypto-js"));
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, data, timestamp) => Crypto.SHA256(index + previousHash + data + timestamp).toString();
Block.validateStructure = (anyBlock) => typeof anyBlock.index === "number" &&
    typeof anyBlock.hash === "string" &&
    typeof anyBlock.previousHash === "string" &&
    typeof anyBlock.data === "string" &&
    typeof anyBlock.timestamp === "number";
const genesisBlock = new Block(0, "kindOfHash", "", "SuperDummyData", 1111111);
Object.freeze(genesisBlock);
const blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getTimestamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const latestBlock = getLatestBlock();
    const newIndex = latestBlock.index + 1;
    const previousHash = latestBlock.hash;
    const newTimestamp = getTimestamp();
    const newHash = Block.calculateBlockHash(newIndex, previousHash, data, newTimestamp);
    const newBlock = new Block(newIndex, newHash, previousHash, data, newTimestamp);
    Object.freeze(newBlock);
    addBlockToChain(newBlock);
    return newBlock;
};
const validateBlock = (latestBlock, newBlock) => Block.validateStructure(newBlock) &&
    latestBlock.index + 1 === newBlock.index &&
    latestBlock.hash === newBlock.previousHash &&
    newBlock.hash === Block.calculateBlockHash(newBlock.index, newBlock.previousHash, newBlock.data, newBlock.timestamp) &&
    Math.ceil(Math.log10(newBlock.timestamp + 1)) === 10 && // timestamp must be 10 digits
    newBlock.timestamp > 0; // timestamp must not be minus value
const addBlockToChain = (newBlock) => {
    const latestBlock = getLatestBlock();
    if (!validateBlock(latestBlock, newBlock)) {
        return console.error('Error: Invalid Block!');
    }
    blockchain.push(newBlock);
};
createNewBlock("blabla");
console.log(getBlockchain());
createNewBlock("blabla2");
console.log(getBlockchain());
//# sourceMappingURL=index.js.map