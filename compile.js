const path = require("path");
const fs = require("fs");
const solc = require("solc"); // solidity compiler

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol"); // using this so it can be used for windows and unix alike
const source = fs.readFileSync(inboxPath, "utf8");

module.exports = solc.compile(source, 1).contracts[":Inbox"]; // Since it's only one contract inbox-contract can be exported
