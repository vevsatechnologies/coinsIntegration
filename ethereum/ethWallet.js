
const Web3 = require('web3');

var web3 = new Web3( "ws://localhost:8546" );

console.log( web3.eth.blockNumber );

web3.eth.getBlockNumber(function(error, result){ 
if (!error)
console.log(result)
 })



console.log( web3.version );

// function insertInPendingDeposits(tx) {

// insertString = 'insert into eth_pendingdeposits values($1,$2,$3)';

// pgClient.query( insertString , [tx.hash, tx.to, tx.value], (err, res) => {
// console.log(err);
// console.log( res );

// });
// }

// function insertInDepositTransactions(tx) {

// insertString = 'insert into eth_deposittransactions values($1,$2,$3)';

// pgClient.query( insertString , [tx.hash, tx.to, tx.value], (err, res) => {

// console.log(err);
// console.log( res );

// });
// }

// function handleIncomingDeposit(tx) {

// console.log( tx );

// insertInDepositTransactions(tx);
// insertInPendingDeposits(tx);

// }

// web3.eth.subscribe( 'pendingTransactions', function(err,result) {

//   if(!err) {
//     console.log("-----pendingTransactions success------");
//   }
// })
// .on("data", function( txhash ) {
//   console.log("---------------------------------");
//   console.log("----Pending Txn Data----");
//   console.log( txhash );
//   console.log("---------------------------------");
  
//   web3.eth.getTransaction( txhash )
//   .then( function(obj) {
//     handleIncomingDeposit(obj);
//   });

// });

// function moveFromPendingToConfirmed(response) {

//       txid = response.hash;

//       qs = 'insert into eth_confirmeddeposits values($1,$2,$3)'

//       pgClient.query( qs, [txid, response.to, response.value ], function(err,result) {

//       console.log(result);
//       console.log("-Entered in confirmations table-");

//       // delete from pendingDeposits table

//       deleteQuery = 'delete from eth_pendingdeposits where txid=$1'

//       console.log(' delete from eth_pendingdeposits where txid=', txid);

//       pgClient.query( deleteQuery, [txid], function(err,result) 
//       {
//         if(!err)
//           {
//             console.log("---Deleted from pending txns table---");
//             console.log(result);
//           }
//         else {
//           console.log("-------Some Error in deleting from pendingdeposits table------");
//         }
//       });
//     });
// }

// function handleNewBlock() {

//   queryString = "select txid from eth_pendingdeposits";

//   pgClient.query( queryString, (err,res) => {

//   for( let row of res.rows ) {
//     console.log(row.txid);
  
    
//     web3.eth.getTransaction( row.txid)
//     .then( function(response) {

//         web3.eth.getBlockNumber()
//         .then( function(blockNo) {

//           console.log( "Ethhh", blockNo );
//           console.log( "Tx Block ", response.blockNumber );
     
//           if( response.blockNumber != null && ( blockNo - response.blockNumber ) >= 2 ) {
//             console.log("gettransaction response : ",  response);  
//             moveFromPendingToConfirmed(response);
//         }
//        });
//    });

//   //  ----------------------------------gettransaction end
//   }
//  });
// }

// web3.eth.subscribe("newBlockHeaders", function(err,result) {

// if(!err) 
// {
// }
// })
// .on('data', function(blockHeader) {
  
//   console.log("---------------------------------");
//   console.log("-------------Block Header Data --------------------");
//   console.log("---------------------------------");

//   handleNewBlock();
// });

