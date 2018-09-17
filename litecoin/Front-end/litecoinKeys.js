var litecore = require('litecore-lib');



/*
* Returns a randomly generated pirvate key
*
*  Instantiate a PrivateKey 
* @return
*    A private key generated from a BN , Buffer and WIF.
*/

var privateKey = new litecore.PrivateKey();
console.log(privateKey.toString());




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

var address = publicKey.toAddress(litecore.Networks.testnet);
console.log(address.toString());

