const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
    .then((res) => res.json(res))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const emailid = req.body.emailid;
    const address = req.body.address;
    const mobileno = Number(req.body.mobileno);

    const newUser = new User({username, password, emailid, address, mobileno});

    newUser.save()
    .then(() => res.json('User added successfully'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;