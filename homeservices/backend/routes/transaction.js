const router = require('express').Router();
let User = require('../models/transaction.model');

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const paymentid = req.body.paymentid;
    const emailid = req.body.emailid;
    const amount = Number(req.body.amount);
    const mobileno = Number(req.body.mobileno);

    const newUser = new User({username, paymentid, emailid, amount, mobileno});

    newUser.save()
    .then(() => res.json('Transaction details added successfully'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;