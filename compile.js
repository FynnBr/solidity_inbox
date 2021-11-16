const path = require('path');
const fs = require('fs');
const solc = require('solc'); // solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // using this so it can be used for windows and unix alike
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'Inbox.sol'
].Inbox; // Since it's only one contract inbox-contract can be exported

// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts);
