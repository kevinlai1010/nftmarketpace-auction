require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("@nomiclabs/hardhat-etherscan");
const {
  rinkebyPrivateKey,
  alchemyUrl,
  etherscanApiKey,
} = require("./secretsManager.example.js");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const RINKEBY_PRIVATE_KEY = rinkebyPrivateKey;
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  gasReporter: {
    enabled: true,
    currency: "USD",
    gasPrice: 30,
    coinmarketcap: "9aacee3e-7c04-4978-8f93-63198c0fbfef",
  },
  // // uncomment this and run: npx hardhat run scripts/deploy.js --network rinkeby
  // networks: {
  //   rinkeby: {
  //     url: alchemyUrl,
  //     accounts: [`0x${RINKEBY_PRIVATE_KEY}`],
  //   },
  // },
  // etherscan: {
  //   // Your API key for Etherscan
  //   // Obtain one at https://etherscan.io/
  //   apiKey: etherscanApiKey,
  // },
};
