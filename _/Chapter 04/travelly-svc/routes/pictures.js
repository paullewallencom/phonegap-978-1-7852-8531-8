var express = require('express');
var router = express.Router();
var multer = require('multer');

var mongoose = require('mongoose');
var Picture = require('../models/Picture.js');

/**
 * THe JWT middleware
 */
var jwtauth = require('../lib/jwtauth');

/**
 * A simple middleware to restrict access to authenticated users
 */
var requireAuth = function(req, res, next) {
    if (!req.user) {
        res.status(401).end('Not authorized')
    }   else {
        next()
    }
}

/* GET pictures listing */
router.get('/', jwtauth, requireAuth, function(req, res) {
    Picture.find(function(err, pictures) {
        if (err) return next(err);
        res.json(pictures);
    });
});

/* POST /pictures */
router.post('/', jwtauth, requireAuth, multer({
    dest: './public/uploads/',
    rename: function(fieldname, filename) {
        return Date.now();
    },
    onFileUploadStart: function(file) {

        console.log(file.originalname + ' is starting ...')
    },
    onFileUploadComplete: function(file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
    }
}), function(req, res, next) {

	var picture = req.body;

    if (req.files && req.files && req.files.picture) {
    	picture.fileName = req.files.picture.name;
    }

    Picture.create(picture, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });

});

/* GET /pictures/id */
router.get('/:id', jwtauth, requireAuth, function(req, res, next) {
    Picture.findById(req.params.id, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /pictures/:id */
router.put('/:id', jwtauth, requireAuth, function(req, res, next) {
    Picture.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /pictures/:id */
router.delete('/:id', jwtauth, requireAuth, function(req, res, next) {
    Picture.findByIdAndRemove(req.params.id, req.body, function(err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
