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
    constructor(index, hash, prevHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, prevHash, data, timestamp) => Crypto.SHA256(index + prevHash + data + timestamp).toString();
const genesisBlock = new Block(0, "kindOfHash", "", "SuperDummyData", 1111111);
Object.freeze(genesisBlock);
const blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getTimestamp = () => Math.round(new Date().getTime() / 1000);
console.log(getBlockchain());
console.log(getLatestBlock());
console.log(getTimestamp());
//# sourceMappingURL=index.js.map