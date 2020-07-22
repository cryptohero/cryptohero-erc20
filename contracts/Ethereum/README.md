## What's this?
Yet another hotpotato nft contract.

## How to deploy
Change '.secret_sample' to '.secret' and write your mnemonic in this file.
Do not upload your '.secret' to public Internet by mistake.

We are using [OpenZeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts).

> npm install
rm -rf ./build
truffle deploy --network ropsten
truffle deploy --reset --network ropsten

## How to test
truffle exec query.js --network rinkeby