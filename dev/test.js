const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389, 'OKJSHSGAHHH00', 'KAJAHSGBD790KJ');
bitcoin.createNewTransaction(100, 'ALXjjsjjssjsj', 'JENNoojjshshshshkj');
bitcoin.createNewBlock(2000, 'OKJSHSGAHHH00', 'kjhagghhdd79');

bitcoin.createNewTransaction(50, 'A2Xjjsjjssjsj', 'A2Xjjsjjssjsj');
bitcoin.createNewTransaction(40, 'A3Xjjsjjssjsj', 'A3Xjjsjjssjsj');

bitcoin.createNewBlock(1000, 'OKppHSGAHHH00', 'kojhagghhdd79');
console.log(bitcoin.chain[2]);
