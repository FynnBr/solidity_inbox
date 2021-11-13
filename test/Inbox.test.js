const assert = require("assert");
const ganache = require("ganache-cli"); // local eth test network
const Web3 = require("web3"); // uppercase -> constructor
const web3 = new Web3(ganache.provider()); // lowercase --> instance
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  // get list of all accounts
  accounts = await web3.eth.getAccounts();
  // use one of these accounts to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});
