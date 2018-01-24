# create-react-app front-end

This is the front-end client for our dapp. It is built with `create-react-app` and uses a higher-order component (HOC) so we can easily let each page connect to the blockchain and the contract instance.

## App

`App` is where the actual navigation happens and where we load Web3.
In the `render` prop provided to `Web3` component, we check if `web3`, `accounts`, and `contract` are already loaded and if so, we perform the appropriate navigation depending on the current path.

## pages

This folder contains the pages having their own url. The name of each sub-directory corresponds to a separate route.

We use [react-router](https://reacttraining.com/react-router/web/) for routing.

### pages/home/Home.js

Initial home page corresponding to the `/` url.

### pages/accounts/Accounts.js

This is a page listing the accounts returned from Web3. The `Accounts` component is stateless and expects `location` object from the `Router` and `accounts` from Web3. Both are injected in `App.js` component.

### pages/dapp/DApp.js

The `DApp` components makes calls to the `contract` given in one of the props provided by `Web3` component.

## components

Components hold some shared presentational components that support navigation and a bit of styling. We wanted to avoid imposing any specific framework so at least we could remove some noise coming from styling issues by giving it their own abstractions.

We encourage you to try [glamorous](https://github.com/paypal/glamorous) for handling styling in React.

### components/web3

Here, in the `Web3.js` file, we define our `Web3` component that follows *render props* pattern. As we can see, the `render` prop function receives an object with three attributes: `web3`, `accounts`, and `contract`.

### components/navigation

Components used to render a small navigation menu on every page.

### components/wrapper

A `Wrapper` components to provide uniform top-level positioning for each page.

## services/web3

`web3` provides utilities and a HOC to inject `web3` instance, `accounts`, and a `contract` as props.

### getWeb3.js

This is a function for actually getting the Web3 object. [ToDo: explain web3 injection and the relevant .env file contents]

### withWeb3.js

This is a higher-order component (HOC) that allows us to wrap a component and "magically" have `web3`, `accounts`, and the `contract` instance injected as props. For an example of how to use it, look at the `accounts` and `dapp` pages.

You may want to modify this for your own purposes. For example, you can change what is shown to the user while the app is loading Web3.

### utils.js

The functions `getAccounts` and `getContractInstance` are placed in this file, and their purpose is simply explained by their respective names. Both of these functions require `web3` to be passed in and will resolve asynchronously.

If you want to get multiple contract instances, you may want to add an additional function based off of `getContractInstance`.

## contracts

A symlink to the top-level `build/contracts` located in the Truffle project is placed here so that the React app can refer to the build artifacts from the parent Truffle project.

## .env

This file contains environment variables.

| ENV  | default value  | description |
|------|----------------|-------------|
| BROWSER | `google chrome` | the browser to be used by CRA |
| NODE_PATH | `src/`  | Default import path. It will let us to use import paths |
| REACT_APP_USE_INJECTED_WEB3 | `NO` | If set to `NO` the `web3` instance potentially injected in the browser (like _MetaMask_)will be ignored. Set it to `YES` to use `web3` object that was injected. |
| REACT_APP_WEB3_PROVIDER_URL | `http://localhost:9545` | The local provider URL. Relevant only when `REACT_APP_USE_INJECTED_WEB3` is set to `NO`. This is the default provider URL used by truffle development console. |

## conventions

We promote using named exports rather than default export. For a reasoning you may check out [Why we have banned default exports in Javascript and you should do the same](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad).

Then to make module imports more communicative, and to improve encapsulation, we use `index.js` file in every folder. This file might be considered a public API for your component.

You may also consider using a `package.json` file instead `index.js`. We found `index.js` to be slightly more flexible for that purpose.

Such a `package.json` would contain only one attribute pointing out to the main file in your component, e.g.:

```json
{
  "main": "Accounts.js"
}
```
