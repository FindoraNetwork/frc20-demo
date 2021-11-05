# FRC20 demo project

## Prerequisites
 This tutorial requires Node.js to be installed. You can download it through [Node.js](https://nodejs.org/) or run the following code to complete the installation.
    You can verify the correct installation by requesting the version of each installation package：
```
   node -v
```
```
   npm -v
```

## Created by following steps
### Prepare the environment
1. prepare `.secret` with your `mnemonic` or your `private key`

1. install required package `truffle` and `@truffle/hdwallet-provider`
    ```
    $ npm install --silent truffle @truffle/hdwallet-provider
    ```

1. init truffle project

    ```
    $ npx truffle init
    ```


### Implement
1. add FRC20TOken.sol
    ```
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.7;

    // NOTE: this is just for the demo and not tested, use on your own risk.

    contract FRC20Token {
        ...
    }
    ```

1. try to compile the contract
    ```
    $ npx truffle compile
    ```



### Deploy on findora network
1. add findora_forge network
    ```
    findora_forge: {
        provider:()=> new HDWalletProvider(mnemonic, `https://prod-forge.prod.findora.org:8545`),
        network_id: 525,       // findorad evnet's id
        skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
        }
    ```
1. deploy on findora forge net
    ```
    $ npx truffle migrate --network findora_forge
    ```


### Play with console
1. start a console with findora_forge
    ```
    $ npx truffle console --network findora_forge
    ```
1. find the deploy contract
    ```
    > const token = await FRC20Token.deployed()
    ```
1. mint some token to your self
    ```
    > token.mint(accounts[0], 10n**9n)
    ```
1. have fun