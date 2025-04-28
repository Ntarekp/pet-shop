module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions (the defaults get injected into the
   * truffle instance when you call it with a network name). Make sure your
   * provider engine is running and open.
   *
   * Configuration details can be found in the Truffle documentation at
   * https://trufflesuite.com/docs/truffle/reference/configuration
   *
   * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
   * to sign your transactions before they're sent to a remote public node. Infura API
   * keys are available for free at https://infura.io.
   *
   * Note that deploying to public networks (kovan, rinkeby, ropsten, goerli, mainnet)
   * can be expensive. Be mindful of gas limits and gas prices.
   *
   * Also see https://consensys.github.io/smart-contract-best-practices/security-recommendations/
   */

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // Useful for testing. The .test suffix skipps migration execution. Running
    // testrpc (ganache-cli --deterministic)
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    // An additional network, but without migrations run
    // custom: {
    //  host: "127.0.0.1",
    //  port: 1234,
    //  network_id: "*",
    //  skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for deploying to a public network.
    // NB: It's generally best to separate out the private keys for each environment
    //     in a separate `.env` file using the `dotenv` package. Example:
    //
    // require('dotenv').config();
    // const HDWalletProvider = require('@truffle/hdwallet-provider');
    //
    // const infuraKey = process.env["INFURA_PROJECT_ID"];
    // const mnemonic = process.env["MNEMONIC"];
    //
    // rinkeby: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
    //   network_id: 4,       // Rinkeby's id
    //   gas: 5500000,        // Gas limit used for deploys
    //   confirmations: 2,    // # of confirmations to wait between deploys. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // mainnet: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
    //   network_id: 1,       // Mainnet's id
    //   gas: 6721975,
    //   gasPrice: 10000000000, // 10 gwei
    //   confirmations: 2,    // # of confirmations to wait between deploys. (default: 0)
    //   timeoutBlocks: 200,
    //   skipDryRun: true
    // },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.0",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "byzantium"
      }
    }
  },

  // Truffle DB is currently in beta and automatically configured to work as a
  // drop-in replacement for Ganache. You can opt-out by commenting the...
  // db: {
  //   enabled: false
  // }
};