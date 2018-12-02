const sha256 = require('sha256');


function Blockchain() {
    this.chain = [];
    this.penidingTransactions = [];

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


module.exports = Blockchain;

