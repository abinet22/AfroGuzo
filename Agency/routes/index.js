const express = require('express');
const router = express.Router();
const mysql = require("mysql2")
const connection = require('../database/dbconnection');
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


router.post('/register', async (req, res, next) => {

    const repeatPassword = req.body.repeatPassword;
    const errors = [];
    const subscription_type = ''
    const is_active = 'yes'

    const userData = {
        agency_name: req.body.agency_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        subscription_type: subscription_type,
        is_active: is_active
    }

    
     // Check required fields
     if (!email || !phone_number || !password || !repeatPassword) {
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
           userData
        });
    } else {
    
        db.Agency.findOne({
            where: {
                agency_name: req.body.agency_name
            }
        }).then(user => {
                if (!user) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.render('login', {
                                success_msg: "Successfully created a new User",
                                user: req.user
                            }); // end of render

                        }).catch(err => {
                            res.send('ERROR: ' + err)
                        }) // end of then catch for create method
                    }); // 
                } else {
                    res.render('register', {
                        error_msg: "User already exists",
                        user: req.user
                    })   
                }
            }).catch(err => {
                res.send('ERROR: ' + err)
            }); // end of then catch for findOne method 
    

             // const sqlSearch = "SELECT * FROM Agency WHERE agency_name = ?"
        // const search_query = mysql.format(sqlSearch,[agency_name])
        // const sqlInsert = `INSERT INTO Agency VALUES ("${uuid}","${agency_name}","${user_name}","${phone_number}", "${email}",
        // "${subscription_type}", "${is_active}","${hashedPassword}", NOW(), NOW())`
        // const insert_query = mysql.format(sqlInsert)
        // // ? will be replaced by values
        // // ?? will be replaced by string
        // console.log("do agency exist")
        // console.log(agency_exist);
        // console.log(agency_exist.length);

        // if (agency_exist.length != 0){

        //     res.render('register', {
        //         error_msg: "User already exists",
        //         user: req.user
        //     })
        // } else {
            
        //     db.Agency.create({
        //         agency_name: agency_name,
        //         email: email,
        //         phone_number: phone_number,
        //         password: hashedPassword
        //     }).then(result => {


        //     })
        // } 
                    // const hashedPassword = await bcrypt.hash(password,10);

    
        // connection.query (search_query, (error, result) => {
        
        //     if (error) throw (error)

        //     // console.log("------> Search Results")
        //     // console.log(result.length)
        //     if (result.length != 0) {
        //     // console.log("------> User already exists")
        //     res.render('register', {
        //         error_msg: "User already exists",
        //         user: req.user
            
        //     })
                 
        //     } else {

        //     connection.query (insert_query, (error, result)=> {
            
        //     if (error) throw (error)
        //     // console.log ("--------> Created new User")
        //     // console.log(result.insertId)
        //     res.render('login', {
        //         success_msg: "Successfully created a new User",
        //         user: req.user
        //     })
                
        //         })
                
        //     }
            
        //     }) //end of connection.query()

    }

   
}) // end of register Post router 

module.exports = router;