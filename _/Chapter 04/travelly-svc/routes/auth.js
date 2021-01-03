var express = require('express');
var router = express.Router();
var UserModel = require('../models/User.js');
var jwt = require('jwt-simple');
var moment = require('moment');

router.get('/', function(req, res) {
  res.render('login', { title: 'Login', message: null });
});

router.post('/', function(req, res) {

    if (req.body.username && req.body.password) {

        // Fetch the appropriate user, if they exist
        UserModel.findOne({
            username: req.body.username
        }, function(err, user) {

            if (err || !user) {
                // user cannot be found; may wish to log that fact here
                res.render('login', { title: 'Login', message: 'Authentication failed. Login or password is incorrect.' });
                return;
            }

            user.comparePassword(req.body.password, function(err, isMatch) {
                if (err) {
                    // an error has occured checking the password
                	res.render('login', { title: 'Login', message: 'Authentication failed. Login or password is incorrect.' });
                	return;
                }
                if (isMatch) {

                    // Great, user has successfully authenticated, so we can generate and send them a token.	
                    var expires = moment().add('days', 7).valueOf()
                    var token = jwt.encode({
                            iss: user.id,
                            exp: expires
                        },
                        app.get('jwtTokenSecret')
                    );
                    res.redirect('/?token=' + token);
                } else {
                    // The password is wrong...
                    res.render('login', { title: 'Login', message: 'Authentication failed. Login or password is incorrect.' });
                    return;
                }
            });

        });
    } else {
        // No username provided, or invalid POST request
        res.render('login', { title: 'Login', message: 'Authentication failed. Login or password is incorrect.' });
        return;
    }
})

module.exports = router;