const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: false}));

const Transaction = require('../models/Transaction');

router.get('/transactions', async function(req, res) {
    const transactions = await Transaction.find({});
    res.send(transactions);
})

router.post('/transaction', async function(req, res) {
    const t1 = await new Transaction ({...req.body});
    await t1.save();
    res.send(t1);
})

router.delete('/transaction/:id', async function(req, res) {
    const transaction = await Transaction.findByIdAndRemove(req.params.id);
    res.end();
})


module.exports = router