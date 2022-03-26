const express = require('express');
const router = express.Router();
const mysql = require("mysql")
const connection = require('../database/dbconnection');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
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

router.post('/login', (req, res, next) => {

    // console.log(`from login router, req.body is`)
    // console.log(req.body)

    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true

    })(req, res, next);
});


router.post('/register', async (req, res, next) => {

    const uuid = uuidv4();

    const errors = [];
    const subscription_type = ''
    const is_active = 'yes'

    const {agency_name, user_name, phone_number, email, password, repeatPassword} = req.body;
    
    const hashedPassword = await bcrypt.hash(password,10);
     // Check required fields
     if (!agency_name || !user_name|| !phone_number || !email || !password || !repeatPassword) {
        errors.push({ msg: 'Please fill in all fields' });
    }
    // Check password
    if (password !== repeatPassword) {
        errors.push({ msg: 'Passwords do not match' });
    }
    // Check password length
    if (password.length < 6) {
        errors.push({ msg: 'Password should be at least 6 characters' });
    }
    if (errors.length > 0) {
        res.render('register', {
            errors,
            agency_name,
            user_name,
            phone_number,
            email,
            password,
            repeatPassword
        });
    } else {
        
        const sqlSearch = "SELECT * FROM Agency WHERE agency_name = ?"
        const search_query = mysql.format(sqlSearch,[agency_name])
        const sqlInsert = `INSERT INTO Agency VALUES ("${uuid}","${agency_name}","${user_name}","${phone_number}", "${email}",
        "${subscription_type}", "${is_active}","${hashedPassword}", NOW(), NOW())`
        const insert_query = mysql.format(sqlInsert)
        // ? will be replaced by values
        // ?? will be replaced by string
    
        connection.query (search_query, (error, result) => {
        
            if (error) throw (error)

            // console.log("------> Search Results")
            // console.log(result.length)
            if (result.length != 0) {
            // console.log("------> User already exists")
            res.render('register', {
                error_msg: "User already exists",
                user: req.user
            
            })
                 
            } else {

            connection.query (insert_query, (error, result)=> {
            
            if (error) throw (error)
            // console.log ("--------> Created new User")
            // console.log(result.insertId)
            res.render('login', {
                success_msg: "Successfully created a new User",
                user: req.user
            })
                
                })
                
            }
            
            }) //end of connection.query()

    }

   
}) // end of router.post

router.post('/application_form', async (req, res) => {

    console.log('from application form router')
    console.log(req.body)
}) // end of router.post

module.exports = router;