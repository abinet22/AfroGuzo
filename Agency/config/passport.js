const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const { serializeUser, use } = require('passport');
const connection = require('../database/dbconnection');
// Load User model
//const User = require('../models/User');
var user;
module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {

      console.log(`from passport user is: `)
      console.log(username)
      // Match user
      connection.query('SELECT * FROM Agency WHERE user_name = ? ', [username], function(error, results, fields) {
        if (error) 
            return done(error);
           
          
        if(results.length==0)
        {
            return done(null,false,{ message: 'Invalid Credential' });
        }
     //   const isValid=validPassword(password,results[0].hash,results[0].salt);
        user={userid:results[0].agency_id, username:results[0].user_name,password:results[0].password};
        console.log(`passport --> database: `)
        console.log(user)
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
    });
    
    })


  );
    
  passport.serializeUser(function(user, done) {
    done(null, user.userid);
  });

  passport.deserializeUser(function(userid, done) {
      connection.query('SELECT * FROM Agency  where agency_id = ?',[userid], function(error, results) {
        if (error) throw error;
        done(null, results[0]);    
      });
  });

};
