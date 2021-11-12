const assert = require("assert");
const ganache = require("ganache-cli"); // local eth test network
const Web3 = require("web3"); // uppercase -> constructor
const web3 = new Web3(ganache.provider()); // lowercase --> instance
