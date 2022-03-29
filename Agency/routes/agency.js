const express = require("express");
const router = express.Router();
const db = require("../models")
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const bcrypt = require('bcryptjs');


router.get('/all', (req, res) => {
    db.Agency.findAll({

    }).then(allAgencies => res.send(allAgencies)) // end of db
}); // end of router


router.post('/register',  (req, res, next) => {

    const {email, phone_number, password, repeatPassword} = req.body;

    const errors = [];
    const subscription_type = 'yearly + usage amount'
    const is_active = 'yes'

    const userData = {
        agency_name: req.body.agency_name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        password: req.body.password,
        subscription_type: subscription_type,
        is_active: is_active
    }

    console.log(userData)
    
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
                    db.Agency.create(userData)
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
