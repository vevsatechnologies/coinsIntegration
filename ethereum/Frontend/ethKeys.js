var eth     = require('ethereumjs-util');
var Wallet = require('ethereumjs-wallet');


// var seed = '8810a051199bc18a9228f31dbc5d7e046955d86f8a1814d534816e5b2a2a1d2a79f5f63b0a7f55aff84d90d7c69a867aa89d3efe52196afc93d29f14db44aad5'


// var privateKey = new Buffer(seed)  //seed will come from bip39 , mnemonic.js file
// console.log(privateKey)

// var publicKey = eth.privateToPublic(privateKey).toString()
// console.log(publicKey)


// var address = eth.publicToAddress(publicKey).toString()
// console.log(address)





const wallet = Wallet.generate();
console.log("privateKey: " + wallet.getPrivateKeyString());
console.log("publicKey: " + wallet.getPublicKeyString());
console.log("address: " + wallet.getAddressString());