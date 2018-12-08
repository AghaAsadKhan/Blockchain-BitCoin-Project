const sha256 = require('sha256');


function Blockchain() {
    this.chain = [];
    this.penidingTransactions = [];
    this.createNewBlock(100, '0', '0');

}

Blockchain.prototype.createNewBlock = function (noncs, previousBlockHash, hash)
{
   const newBlock =
       {
           index: this.chain.length + 1,
           timestamp: Date.now(),
           transactions: this.penidingTransactions,
           nonce: noncs,
           hash: hash,
           previousBlockHash: previousBlockHash

       };


   this.penidingTransactions = [];
   this.chain.push(newBlock);
   return newBlock;

}

Blockchain.prototype.getLastBlock = function()
{
    return this.chain[this.chain.length -1];
}

Blockchain.prototype.createNewTransaction = function(amount, sendr, recipient)
{
    const newTransaction =
        {
            amount: amount,
            sendr: sendr,
            recipient: recipient
        };
    this.penidingTransactions.push(newTransaction)

    return this.getLastBlock()['index'] + 1;
}


Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce)
{
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
}


Blockchain.prototype.proofOfWork = function(previousBlockHash, CurrentBlockData) {
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, CurrentBlockData, nonce)
    while (hash.substring(0, 4) !== '0000') {
        nonce++;
        hash = this.hashBlock(previousBlockHash, CurrentBlockData, nonce);
        console.log(hash);

    }
    return nonce;
}


module.exports = Blockchain;

