require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remember slow hidden arena bone ghost'; 
let testAccounts = [
"0x2c019e34fd2a0b58a5ec02c250bed3166a4f26b9bfe570e37fb1a3fc515a4039",
"0x0b430955b3e80c34b3957fc33662cbe0bf166e8b63c24cc29e0863baffb4fb9b",
"0x0e43c062a1d7d54d945aef720be784d937bfb2d6b3384b7ac3cd20e1908e803d",
"0x856c725c07c68c54cacf5d29978cfe4d58b87ae6f95bb0b623a4ffb53f6f30f2",
"0x0c3a674f39786eba199e84de2f10078aaf7e6151dbbbb6f75e3bac0e3156c486",
"0xe27e52534fd796911f0648270c61fe77c46d19a984e542f4aa1ccc28e3064a4b",
"0xbe529d98c934b2cc2b83c2b93a2f23d9accc92bd4362d558c1044da6b631553c",
"0x02cfd9f365cd8d779c566eaa93c251e23549d65d4caabb3cf14d3105fee9ccd1",
"0x9e0e971b8e187784b0f82f0a1b09c470d12d63c6e1c7d1dd619f36920c0ebfdd",
"0xbf824c0b8be711899e587c42a3951daaafdf2b78c2bd7190cb987c4c262b2b5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

