pragma solidity >=0.4.21 <0.7.0;

import './interfaces/IERC20.sol';

contract Cryptohero {
    address public issuer_address;
    address public owner;
    uint256 public price;

    constructor() public {
        issuer_address = 0x15291B4AeB7ae84FC932b502d131fA7A8c0F8906;
        owner = 0xE8B21A66d89401254045bAb95B474B52B6faC351;
        price = 1;
    }

    function buy(uint256 offer) public {
        if (msg.sender == owner) return;
        if (offer < price) return;
        IERC20 token = IERC20(issuer_address);
        token.transferFrom(msg.sender, owner, price);
        owner = msg.sender;
        price = price + 1;
    }
}
