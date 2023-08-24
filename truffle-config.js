require("babel-register");
require("babel-polyfill");
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(
          "frozen impose soda arrange frozen pluck stick grow vanish car equip rookie",
          "https://sepolia.infura.io/v3/a57f9d4948f84ba8ac22fdf1965df264"
        ),

      network_id: "11155111",
      gas: 4465030,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
