const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { response } = require('express');
const { serializeUser, use } = require('passport');
const connection = require('../database/dbconnection');
const db = require("../models")

var user;

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ emailField: 'email' }, (email, password, done) => {

      console.log(`from passport user is: `)
      console.log(email)

    //   // Match user
    //   connection.query('SELECT * FROM Agency WHERE user_name = ? ', [username], function(error, results, fields) {
    //     if (error) 
    //         return done(error);
           
          
    //     if(results.length==0)
    //     {
    //         return done(null,false,{ message: 'Invalid Credential' });
    //     }
    //  //   const isValid=validPassword(password,results[0].hash,results[0].salt);
    //     user={userid:results[0].agency_id, username:results[0].user_name,password:results[0].password};
       
    //     bcrypt.compare(password, user.password, (err, isMatch) => {
    //       if (err) throw err;
    //       if (isMatch) {
    //         return done(null, user);
    //       } else {
    //         return done(null, false, { message: 'Password incorrect' });
    //       }
    //     });
    // });

    db.Agency.findOne({
        where: {email: email}
      }).then(response => {
        if (response){
          user = {
            userId: response.id,
            agency_name: response.agency_name,
            password: response.password
          }

          console.log(`passport --> database: `)
          console.log(user)

          bcrypt.compare(password, user.password, (err, isMatch) => {

            if (err) throw err;

            if (isMatch) {
              return done(null, user)
            } else {
              return done(null, false, { message: 'Password incorrect' });
            }

          }); // end of bcrypt
        }
      }).catch(err => {
        return done(err)
      })
    
    }) // end of local strategy


  );
    
  passport.serializeUser(function(user, done) {
    done(null, user.userId);
  });

  passport.deserializeUser(function(userId, done) {

      db.Agency.findOne({
        where: {id: userId}
      }).then(response => {
         done(null, response);
      }).catch(err => {
        throw err;
      }); // end of then catch for findOne method 

      // connection.query('SELECT * FROM Agency  where id = ?',[userId], function(error, results) {
      //   if (error) throw error;
      //   done(null, results[0]);    
      // });

  }); // end of deserializeUser

}; // end of export function 
