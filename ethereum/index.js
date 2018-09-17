var Web3          = require('web3');
var web3          = new Web3('ws://localhost:8546');


var address = "0x7379454976378070017fde3e115112439af9c083";
var txHash = "0x06bdae8510ed161c8b858c0d1ccff41d0092d680e08fd2b77986f05df76f5266";
var signedTransactionData = "0xf861058253d88252089486c5befe7fabff4d1d53756b2a8ced283e7f7a3480801ca050bba714b1991aeb2907068b2666d326298f01bc4fd619d45f861070277ad441a01437434740d3ecfb13a871487a565c7133b9b423caa17ff4137200b15b5d5792"


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new 
  Web3.providers.HttpProvider("http://localhost:8545"));
}

/**
  *
  * Returns the current gas price oracle. The gas price is determined by the last few blocks median gas price.
  *
  */

web3.eth.getGasPrice()
.then(function(result){
  console.log("Gas price :" + result);
});


web3.eth.estimateGas({
    from: "0x7379454976378070017fde3e115112439af9c083",
    to: "0x86c5befe7fabff4d1d53756b2a8ced283e7f7a34",
    value: "0x3d4ccccd",
    data: "0xc6888fa10000000000000000000000000000000000000000000000000000000000000003"
})
.then(function(result) {
  console.log("Estimated Gas Price: " + result);
});

// web3.eth.getAccounts(console.log);

// console.log(web3.eth.defaultBlock)
// web3.eth.getProtocolVersion()
// .then(console.log);

// /**
//   * Returns balance of the address
//   * @params
//   *     {String} - address to get the balance of
//   * @returns 
//   *      {String} A bignumber instance of current balance for the given address
//   */

web3.eth.accounts.wallet.add(address);


web3.eth.getBalance(address)
.then(function(result){
  console.log("Balance of given address is :" + result);
});







// /**
//   * Returns transaction object for a given transaction hash
//   * @params
//   *     {String} - Transaction Hash
//   * @ret
//   *     {object} - A transaction object
//   */

web3.eth.getTransaction(txHash).then( function(result) {
  console.log("Transaction details :" + JSON.stringify(result))
});


// /**
//   * Returns transaction object for a given transaction hash
//   * @params
//   *     {String} - Signed Transaction data in hex format   ; required
//   *     {function} - callback http request                 ; optional
//   * @returns 
//   *     {String} - 32 bytes transaction hash
//   */

 // web3.eth.sendSignedTransaction(signedTransactionData).then((result) => console.log("Transaction Hash : " + JSON.stringify(result.transactionHash)));

// web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
// .on('receipt', console.log);


web3.eth.getTransactionCount(address).then(function(result) {
   console.log("Nonce " + result);
})


web3.eth.subscribe('pendingTransactions', function(err, res) {
    console.log('Here')
    console.log(err)
    console.log(res)
}).on('data', function(transaction) {
    console.log('Here 2')
    console.log(transaction)
});




var subscription = web3.eth.subscribe('logs', {
                address: address
            }).on("data", function(data){
                console.log("data >>>>>>>>>>", data);
            }).on("changed", function(data){
                console.log(" changed >>>>>>>>>>", data);
            });