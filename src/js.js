etherum = require('web3');

web3 = new ehterum('http://127.0.0.1:7545');

web3.eth.getAccounts().then(function(result)){

 accounts = result;


});

accounts;

fcon = new web3.eth.Contract()
