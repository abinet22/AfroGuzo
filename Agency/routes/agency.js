const express = require("express");
const router = express.Router();
const db = require("../models")
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.post('/new', (req, res) => {
    db.Agency.create({
        user_name: req.body.user_name
    }).then(newAgency => res.send(newAgency)); // end of db instance
}); // end of router post

router.get('/all', (req, res) => {
    db.Agency.findAll({

    }).then(allAgencies => res.send(allAgencies)) // end of db
}); // end of router

module.exports = router;
