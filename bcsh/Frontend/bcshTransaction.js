// Implementing all features related to transaction of bitcoin
var bch = require('bitcoincashjs');

// Signing a bitcoin transaction with private key locally
// var privateKey = BTC private key;     ./bitcoinKeys.js

var privateKey = "b221d9dbb083a7f33428d7c2a3c3198ae925614d70210e28716ccaa7cd4ddb71"
/**
 *
 * UnspentOutput is a class with stateless instances that provides information about an unspent output
 *       utxo data comes from back-end
 */
var utxo = 
[{"txid":"373782f4b24c4ad51ad72e81471ea446cfda8239d51cd3f7b35c91450fed2379","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":1.1,"confirmations":200,"spendable":false,"solvable":false,"safe":true},{"txid":"f28e2b6cdf2b06cb4593bbba1bc938915f70efeee93af9717ca66a199775c8ed","vout":0,"address":"myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH","account":"","scriptPubKey":"76a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac","amount":1,"confirmations":36,"spendable":false,"solvable":false,"safe":true}]


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

var transaction = new bch.Transaction().fee(1000)       //min relay fees is 1000 Satoshi
 

  transaction.from(utxo)                                           // Feed information about what unspent outputs one can use
  .to('mzqwAJtw8zwyoWcMA4MaGYuURBdLjAJvUm',30)          // Address, Amount in Satoshi  ;Add an output with the given amount of satoshis
  .change('myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH')         // Address where the change amount is transferred
  .sign(privateKey);                                   // Signs all the inputs it can                           


console.log(transaction.toString());





// Pending Functions Inside this file

// Getting Balance from server
// Getting unspentamount from server
// Fee related functions
// Submit Signed Transaction hash to backend server

// I will try to add these functions here by today itself




