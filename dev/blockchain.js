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

module.exports = Blockchain;

