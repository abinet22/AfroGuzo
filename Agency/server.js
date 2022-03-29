
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const ejs = require("ejs");
const path = require('path');
const cors = require("cors");
const connection = require('./database/dbconnection');
const PORT = process.env.PORT || 5005
const db = require("./models")

// create express server
const app = express();

// Passport authentication Config
require('./config/passport')(passport);

// let the app use cors
app.use(cors());

// // connect to mysql
// connection
//   .connect((err) =>{
//       if (err)
//       {
//         handleDisconnect();
//       }
//       else{
//         console.log('MYSQL Connected')
//       }
//   });


// function handleDisconnect() {
 

// connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }   
//     else{
//       console.log('MYSQL Connected')
//     }                                  // to avoid a hot loop, and to allow our node script to
//   });                                     // process asynchronous requests in the meantime.
//                                           If you're also serving http, display a 503 error.
 
// };



// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash messuages
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.use(express.static(path.join(__dirname,'./public')));


// Routes
app.use('/', require('./routes/index.js'));

const agencyRoutes = require("./routes/agency");
app.use('/api/agencies', agencyRoutes);

const profileRoutes = require('./routes/profile');
app.use('/api/profiles', profileRoutes );

const applicationRoutes = require("./routes/application");
app.use('/api/applications', applicationRoutes);

// initialize our app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening at: http://localhost:${PORT}`)
  })
})
