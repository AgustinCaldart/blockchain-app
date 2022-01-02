//https://eth-ropsten.alchemyapi.io/v2/muF81YWJqfjCK_lxLq1TzcnANlwlgF2E

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/muF81YWJqfjCK_lxLq1TzcnANlwlgF2E',
      accounts: ['05e06010ccaf2b535ff2774a20ab92f07dd4d717c020adfd75d8f4787c60344e']
    }
  }
}