require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

// Add the alfajores network to the configuration
module.exports = {
  solidity: "0.8.9",
  networks: {
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: process.env.MNEMONIC_KEY,
        path: "m/44'/52752'/0'/0",
      },
      chainId: 44787,
    },
  },
};