require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remember pupil good kiwi fortune spray'; 
let testAccounts = [
"0xabfe2a32fb98ec7e80795d71a592d3485fd19167d5946b5df3f594b5f46a1d36",
"0x219609bd314525ea5ed040fb0ed2dc5a399fd53e239dbfd8fb03b982db1f5e2b",
"0xf79858ca60de0bfa32022b98c200c4d8df2835fe2e94997e9d6ea93ce9c760c4",
"0x0661f114c46da5296a3453dccbabd255bfa5760040f39dcc3c2b194643283f14",
"0xc51b67856dad8df2872bcad7899571b9a1f4728a0d90a2cc118b05fcf914c3e7",
"0x4468e0bce3caef6ea6781a0db67594301fd300c3dea82d9ace13b11155440919",
"0xb449213441ee5811e3577e97353ef01312c698364e879b458d257c9b99ff6257",
"0xd7f957846f6a69ea17af456cc1c2e8f6bfbd994ad9017bbf05ada3c4e2ba7067",
"0x5b6e0f7f0081ae5acea90201a665b3636bee494196e48cdebf831b8de20af137",
"0xcda5af80931315cfaa2cebfd5f0746d792bf2450c149639a062d827272d34a9b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


