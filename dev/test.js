const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'HAJAKAKJSJHD78698';

const currentBlockData =
    [
        {
            amount: 10,
            sendr: 'KHAGHSJKHSJ',
            recipient: 'KLAJHHGGFFDDASSS'
        },

        {
            amount: 100,
            sendr: 'KHAGKJHSSSSDSJ',
            recipient: 'KLATTTTTTTFDDASSS'
        },

        {
            amount: 2000,
            sendr: 'KHAGHSJPPPPPPOOOSJ',
            recipient: 'KLAJHPPPPDDASSS'
        },



    ];


console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 100264));
