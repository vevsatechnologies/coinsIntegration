var litecoin  = require('node-litecoin');

var client = new litecoin.Client({
  host: 'localhost',
  port: 19332,
  user: 'alisha',
  pass: 'alisha'
});


var address = 'mzqwAJtw8zwyoWcMA4MaGYuURBdLjAJvUm'



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
client.getBalance('*', 6, function(err, balance) {
  if (err) return console.log(err);
  console.log('Balance:', balance);
});





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

client.listUnspent(0,99999,[address],function(err,unspent) {

var sum = 0;
  for (var i = 0; i < unspent.length; i++) {
    sum += unspent[i].amount;
    
}

console.log("Balance of given address is :" +  sum);
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

client.listUnspent(0,99999,[address],function(err,unspent) { 
  console.log("UTXO: " + JSON.stringify(unspent))
});



/**
  * Calculates estimated fees
  *
  * @params {Int}-Blocks ; The maximum number of blocks a transaction should have to wait before it is predicted to be included in a block. Has to be between 2 and 25 blocks
  *
  * @returns {object} fee ; the feerate is sent to the front-end during signing of the transaction
  */
client.cmd('estimatesmartfee',6,function(err, fee) {
    if (err) return console.log(err);
  console.log("Fees: " + JSON.stringify(fee));        //fee.feerate will be sent to front-end
})




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
  client.sendRawTransaction("0100000001ec708f8fde0d7cd10fa40f33c9a00bcbf6421260daa50a15dec76b1922792b2e000000006a47304402200ccf65f629a05ea5c2fb1b3bd1baf811d03e913f23ee042bdad3d8f0d643457002202cce23919e3973e9dbc2491cb5abdf9e2780646c9a38255447abb3f461e70649012103170cb463d7acfa03af9e6c65a27a8b6f821e752eaff9ff04f710e07c3fbe5b2effffffff021e000000000000001976a914d40158d14d2fded82f9df673d6514ba94ed9756088acfa9ee111000000001976a914c71f6c7dcc76d87440e47d3fd2623625f9d0e4c788ac00000000",true,function(err,transactionID) {
   console.log("Transaction ID: " + transactionID) 
  } );


// transaction id 076edfe5260138916d26ebdee87257e69293baba615e92bd4100e9633f4b51b7



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

client.getTransaction("076edfe5260138916d26ebdee87257e69293baba615e92bd4100e9633f4b51b7",function(err,result) {
 console.log("Transaction details: " + JSON.stringify(result)) 
} );
