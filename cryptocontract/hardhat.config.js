require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/YMuw6eeM_WOuGAr_D6BBMwwsOWAtscV0',
      accounts: ['2c4b033d2ba6e6ddd1005e45e305481f2a7aaf10e58f1896796ac0a8d86dd9a3'],
    },
  },
};