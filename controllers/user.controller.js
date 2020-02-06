const mongoose = require('mongoose');
const passport = require('passport');

const User = require('../models/user.model');

exports.register = function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.json({success: false, msg: 'Please pass email and password.'});
  } else {
    var user = new User();
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save(function(err, userresult) {
      if(err) {
        return res.json({success: false, msg: 'Email already exists.'});
      } else {
        res.json({success: true, msg: 'Successful created new user.', userresult});
      }
    });
  }
};

exports.login = function(req, res, next) {
      passport.authenticate('local',function(err, user, info){
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ success: true, token: user.generateJwt()});
        // unknown user or wrong password
        else return res.status(404).json(info);
      })(req, res);
};
