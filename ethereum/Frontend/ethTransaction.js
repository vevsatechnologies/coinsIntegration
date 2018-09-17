var eth      = require('ethereumjs-tx')

var privateKey = Buffer.from("1197ac6f82db8acf3b018975205993e4550c93b488030fe71b057911c7479892",'hex');


  var rawTx = { 

    nonce: 5,         //from the back end 
  
    gasPrice: 21464,   //from the back end
  
    gasLimit: 21000,  //  web3.toHex(300000)
  
    to: "0x86c5befe7fabff4d1d53756b2a8ced283e7f7a34", 
  
    from: "0x7379454976378070017fde3e115112439af9c083", 
  
    value: 0, //in wei 
  
    data: ''      //empty if to address is not a contract

  }; 


// var transaction = eth.Transaction(rawTx).sign(privateKey);


const tx = new eth(rawTx);
tx.sign(privateKey);
const serializedTx = tx.serialize()
console.log('0x' + serializedTx.toString('hex'))

//0xf865808253d88252089486c5befe7fabff4d1d53756b2a8ced283e7f7a34843d4ccccd801ca04aab902e6dde31be85afdef015fff19cf8902c36617e017201f023fb2412a02da02a9faf38faa771c99fe49b8b7421228441c6b54875ea1a1e15f722c49746b305



//
// address of account cb01d9ee7a6a395fe28cee539f6056736aa3eaab
// passphrase test123