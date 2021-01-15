const router = require('express').Router();
let ServiceProvider = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
    .then((serviceProviders) => res.json(users))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newServiceProvider = new ServiceProvider({username, password});

    newServiceProvider.save()
    .then(() => res.json('Service Provider added successfully'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;