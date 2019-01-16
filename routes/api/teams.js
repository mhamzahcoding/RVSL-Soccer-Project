const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');

// // // Post model
// const Team = require('../../models/Team');
// // Profile model
// const Profile = require('../../models/Profile');

router.get('/team', (req, res) => res.send( 'team Works' ));

module.exports = router;