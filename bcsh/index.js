const Client     = require('bitcoin-core');
const client     = new Client(  { 
                             network : 'testnet',
                             port    : 18332,
                             username    : 'alisha',
                             password : 'alisha'
                           }  );




var txid = "448140c85b132f462bfee0bbd34504d370d455783c56da9e24258ed1be8222c5" ;   //btc testnet gen 

var address = "myfpQbH489pyt7nDFrWz8ZrrkcnmtrbyKH";

var txHash = "01000000027923ed0f45915cb3f7d31cd53982dacf46a41e47812ed71ad54a4cb2f4823737000000006b483045022100ce7f10ae3678cd5710d50c163e5387c36d18d6f001c248f566998993763f795602200229435074b6bed5302e3bb5dfd1ee270600b571c27396cb8a3bde03462a4ddd412103170cb463d7acfa03af9e6c65a27a8b6f821e752eaff9ff04f710e07c3fbe5b2effffffffedc87597196aa67c71f93ae9eeef705f9138c91bbabb9345cb062bdf6c2b8ef2000000006a47304402205f7538123e4dfcd3dbe5ec5e8d61ef07814bb96beaa5c1874002018e0849732202204f79e097c70f91fa120abe5a365b0cd76995035c3ce7b34f0202cee89af7e1a5412103170cb463d7acfa03af9e6c65a27a8b6f821e752eaff9ff04f710e07c3fbe5b2effffffff021e000000000000001976a914d40158d14d2fded82f9df673d6514ba94ed9756088ac7a54840c000000001976a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac00000000"

var txID = "d9ada17d5079bd39c78e6bc11458feeec564200190bc3b5c90977e796cbee11d"



/**
  * Imports the address
  * 
  * @params
  *      {String} address generated ;    required
  *      {String} account           ;    optional
  *      {bool}   rescan            ;    optional - true by default
  * @returns
  *       {null}
  */
// client.importAddress("mzqwAJtw8zwyoWcMA4MaGYuURBdLjAJvUm").then((result) => console.log("Address Imported"));




/**
  * Returns balance for an account and minimum number of confirmations
  *
  * @params -
  *     {String} - Account                       ; required , "" default account  
  *     {Int} - minimum number of confirmations  ; optional
  *
  * @returns - 
  *     {Number} - balance 
  */
// client.getBalance("", 0).then((balance) => console.log("Balance: "+ balance));




/**
  * Returns balance for an address within the range of provided min and max confirmations
  *
  * @params -
  *     {String} - Address                       ; required , "" default account  
  *     {Int} - minimum number of confirmations  
  *     {Int} - maximum number of confirmations  
  * @returns - 
  *     {Number} - balance 
  */


client.listUnspent(0,99999,[address]).then(function(unspent) {

var sum = 0;
  for (var i = 0; i < unspent.length; i++) {
    sum += unspent[i].amount;
    
}

console.log("Balance of given address is :" +  sum);
} )

/**
  * Calculates estimated fees
  *
  * @params {Int}-Blocks ; The maximum number of blocks a transaction should have to wait before it is predicted to be included in a block. Has to be between 2 and 25 blocks
  *
  * @returns {number} fee ;number of bitcoins 
  * Sets the transaction fees to the calculated fees.
  */

client.estimateFee(6).then((result) => {
 
  console.log("Fees: "+ result)
  } );



/**
  * Lists unspent output for a given address and in given range of confirmations
  * @params 
  *    {Int} - minimum number of confirmations
  *    {Int} - maximum number of confirmations
  *    {[addresses]} - Address
  *
  *   @returns 
  *        utxo object ; array of unspent objects 
  * [{
  *    "txid": "448140c85b132f462bfee0bbd34504d370d455783c56da9e24258ed1be8222c5",
  *    "vout": 1,
  *    "address": "msZqFwxsbjqSac6ANzEcCECvPwi3e9C5MX",
  *    "account": "",
  *    "scriptPubKey": "76a914842ce238e9ed3726fe9a24eddfe47b89b132dd7388ac",
  *    "amount": 1.30000000,
  *    "confirmations": 982,
  *    "spendable": true
  *  }]
  *
  *
  */


client.listUnspent(0,99999,[address]).then((unspent) => console.log("UTXO: " + JSON.stringify(unspent)));



/**
  * Validates a transaction and broadcasts it to the peer-to-peer network.
  * 
  * @params
  *      {HexadecimalString} Transaction ;    required
  *      {bool} Allow high fees  ;             optional - by default false
  *
  * @returns
  *       {null/String}   TxID           
  */

  client.sendRawTransaction(txHash,true).then((transactionID) => console.log("Transaction ID: " + transactionID));


/**
  * Gets information about a particular transaction
  * 
  * @params
  *      {String} TransactionID ;    required
  *
  * @returns
  *       {object}  Information about the transaction        
  *  2a5054484efd968073e9e08241448dc26695ccacbe59491952a4ffdac07a29ce   
  * daf1d80ee42b7e498eec64bb9771904738d092f1b283b5e5fc5f8acc4d3d29d2
  */

client.getTransaction(txID).then((result) => console.log("Transaction details: " + JSON.stringify(result)));



