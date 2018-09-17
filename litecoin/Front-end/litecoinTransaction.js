var litecoin = require('litecore-lib');

// Signing a litecoin transaction with private key locally
// var privateKey = litecoin private key;     ./litecoinKeys.js
var privateKey = 'b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb71'


/**
 *
 * UnspentOutput is a class with stateless instances that provides information about an unspent output
 *       utxo data comes from back-end
 */
var utxo =
 {"txid":"2e2b7922196bc7de150aa5da601242f6cb0ba0c9330fa40fd17c0dde8f8f70ec","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":3,"confirmations":27,"spendable":false,"solvable":false,"safe":true}





/**
 * 
 * Creates a raw transaction
 *
 * @params   
 *      {Number} - fees
 *      {object} - utxo
 *      {String} - address
 *      {Int}    - amount in satoshis
 *      {String} - private key
 * @returns
 *      {object} - transaction hash
 */
var transaction = new litecoin.Transaction().fee(1000)       //min relay fees is 1000 Satoshi
 

  transaction.from(utxo)                                           // Feed information about what unspent outputs one can use
  .to('mzqwAJtw8zwyoWcMA4MaGYuURBdLjAJvUm',30)          // Address, Amount in Satoshi  ;Add an output with the given amount of satoshis
  .change('myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH')         // Address where the change amount is transferred
  .sign(privateKey);                                   // Signs all the inputs it can                           


console.log(transaction.toString());

//0100000001ec708f8fde0d7cd10fa40f33c9a00bcbf6421260daa50a15dec76b1922792b2e000000006a47304402200ccf65f629a05ea5c2fb1b3bd1baf811d03e913f23ee042bdad3d8f0d643457002202cce23919e3973e9dbc2491cb5abdf9e2780646c9a38255447abb3f461e70649012103170cb463d7acfa03af9e6c65a27a8b6f821e752eaff9ff04f710e07c3fbe5b2effffffff021e000000000000001976a914d40158d14d2fded82f9df673d6514ba94ed9756088acfa9ee111000000001976a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac00000000