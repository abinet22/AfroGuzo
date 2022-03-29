const express = require("express");
const router = express.Router();
const db = require("../models")
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const multer = require("multer");

router.post('/new', (req, res) => {

    // TODO:
    // accept the form data and also implement multer uploading here
    // it will be easy to pass the full name of applicant as name for the image file 
    // later it will be easy to associate any image file with it's parent file  

    db.Application.create({
        agency_name: req.body.agency_name,
        AgencyId: req.body.AgencyId
    }).then(newApplication => res.send(newApplication)); // end of db instance
     




}); // end of post router

router.get('/all', (req, res) => {
    db.Application.findAll({

    }).then(allApplication => res.send(allApplication));
}); // end of get router

router.get('/find/:id', (req, res) => {
    db.Application.findAll({
        where: { application_no: req.params.id},
        include: [db.Agency]
    }).then(ApplicationById => res.send(ApplicationById));
}); // end of router


module.exports = router;
