const express = require('express');
const router = express.Router();

const connection = require('../database/dbconnection');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { v4: uuidv4 } = require('uuid');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));
router.get('/dashboard', forwardAuthenticated, (req, res) => res.render('dashboard'));
router.get('/newapplication', forwardAuthenticated, (req, res) => res.render('applicationform'));

router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
module.exports = router;