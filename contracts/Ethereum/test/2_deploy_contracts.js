var cryptohero = artifacts.require("./cryptohero.sol");
var erc20 = artifacts.require("./erc20.sol");

contract("My Test", async accounts => {
  it("test transfer", async () => {

    let abi = artifacts.require("./erc20.sol");
    let e = web3.eth.contract(abi).at(0x15291B4AeB7ae84FC932b502d131fA7A8c0F8906);
    let balance = await e.getBalance.call(accounts[0]);
    console.log(balance);

    await e.transfer(accounts[0], { 
      recipient: 0x2d092633980aa79575780b06344c82eeaad121a4,
      amout: 1
    });
  });
  it("test buy", async () => {
    let c = await cryptohero.deployed();
    await c.buy({
      from: accounts[0],
      offer: 20
    });  
  });
});