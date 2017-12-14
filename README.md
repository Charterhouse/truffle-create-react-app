<h1 align="center">Truffle and React (create-react-app)</h1> <br>
<p align="center">
  <img alt="comet" src="./box-img-lg.png" width="240">
</p>
<p align="center">Rapid Ethereum Dapp Development</p>

<p align="center">
  <img alt="made for ethereum" src="https://img.shields.io/badge/made_for-ethereum-771ea5.svg">
  <img alt="MIT license" src="https://img.shields.io/badge/license-MIT-blue.svg">
</p>

---

# A Minimal Smart Contract Development Boilerplate

[Truffle](https://github.com/trufflesuite/truffle) is great for developing Solidity smart contracts, and [create-react-app](https://github.com/facebookincubator/create-react-app) is a great way to bootstrap a React project. Unfortunately, the official [truffle box for React](http://truffleframework.com/boxes/react) uses the _eject_ mode of the create-react-app, which may be a disadvantage to many React developers. This box provides a basic integration between truffle and React app **without** using the _eject_ mode of create-react-app.

There are two major features:

- A plain `truffle init` project is used as the base (along with a SimpleStorage example contract).

- A create-react-app based React project resides in the `web-app` directory with a symlink to the `build/contracts` folder containing ABI definitions (created after running `truffle compile`). The provided React app is intentionally minimalistic to avoid imposing any specific requirements on the developer. 

For more information on how the frontend works, go read the [README.md](https://github.com/Charterhouse/truffle-create-react-app/blob/master/web-app/README.md) located in the `web-app` directory.

## Installation

1. Install Truffle globally.
    ```bash
    npm install -g truffle
    ```

2. Download the box. This also takes care of installing the necessary dependencies.
    ```bash
    truffle unbox Charterhouse/truffle-create-react-app
    ```

3. Run the development console.
    ```bash
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note that inside the development console we don't preface commands with `truffle`.
    ```bash
    compile
    migrate
    ```

5. Run the create-react-app server for the front-end. Smart contract changes must be manually recompiled and migrated.
    ```bash
    // Change directory to the front-end folder
    cd web-app
    // Serves the front-end on http://localhost:3000
    yarn start
    ```

6. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```bash
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```
## Visual Studio Code integration

[TBD...]