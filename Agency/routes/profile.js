const express = require("express");
const router = express.Router();
const db = require("../models")
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.post('/new', (req, res) => {
    db.Profile.create({
        agency_name: req.body.agency_name,
        AgencyId: req.body.AgencyId
    }).then(newProfile => res.send(newProfile)); // end of db instance
}); // end of post router

router.get('/all', (req, res) => {
    db.Profile.findAll({

    }).then(allProfile => res.send(allProfile));
}); // end of get router

router.get('/find/:id', (req, res) => {
    db.Profile.findAll({
        where: { id: req.params.id},
        include: [db.Agency]
    }).then(profileById => res.send(profileById));
}); // end of router

module.exports = router;
