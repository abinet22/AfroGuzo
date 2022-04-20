const express = require('express');
const router = express.Router();
const mysql = require("mysql2")
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');
const db = require('../models');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// get routers 
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));
router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard'));
router.get('/newApplication', ensureAuthenticated, (req, res) => res.render('applicationForm'));
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'))
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));


// Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/login')

})

// Post Routers 
router.post('/login', (req, res, next) => {

    // console.log(`from login router, req.body is`)
    // console.log(req.body)

    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true

    })(req, res, next);
});


module.exports = router;