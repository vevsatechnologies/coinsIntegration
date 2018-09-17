var bch   = require('bitcoincashjs');


/*
* Returns a randomly generated pirvate key
*
*  Instantiate a PrivateKey 
*  @params
*      {String} - Wallet public key    ; /../Wallet/mnemonic.js
*      {object} - network information  
* @return
*    A private key generated from a BN , Buffer and WIF.
*/

var privateKey = new bch.PrivateKey('b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb71',bch.Networks.testnet);
console.log(privateKey.bn.toString(16,32));




/**
 * Returns the corresponding public key generated from the private key
 *
 * instance method of private key 
 * 
 * @returns
 *    A public key generated from private key
 */

var publicKey  = privateKey.toPublicKey();
console.log(publicKey.toString());



/**
 * Returns an address for the public key
 * 
 * @param {String | Network} bitcoin.Networks.livenet - which network should be the address for
 *
 * @returns {Address}
 *    An address generated from the public key.
 */


var address = publicKey.toAddress(bch.Networks.testnet);
console.log(address.toString());
