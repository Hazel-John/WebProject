const router = require('express').Router();
let ServiceProvider = require('../models/serviceproviders.model');

router.route('/').get((req, res) => {
    ServiceProvider.find()
    .then(response => res.json(response))
    .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const emailid = req.body.emailid;
    const serviceType = req.body.serviceType;
    const mobileno = Number(req.body.mobileno);
    const charge = Number(req.body.charge);

    const newServiceProvider = new ServiceProvider({username, password,emailid,serviceType,mobileno,charge});

    newServiceProvider.save()
    .then(() => res.json('Service Provider added successfully'))
    .catch(err => res.status(400).json('Error: '+ err));
});

module.exports = router;