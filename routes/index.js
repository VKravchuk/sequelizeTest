var models = require('../models');
//var controllers = require('../controllers');
var express = require('express');
var router = express.Router();

router.route('/users')
    .get(function (req, res) {
        models.User.findAll({
            include: [models.Task]
        }).then(function (users) {
            res.send(users);
        });
    })
    .post(function (req, res) {
        models.User.create({username: req.body.username}).then(function ( data ) {
            res.send(data);
        })
    });

router.route('/task')
    .post(function (req, res) {
        models.Task.create({
            UserId : req.body.user_id,
            title : req.body.title
        }).then(function ( data ) {
            res.send(data);
        })
    });

module.exports = router;
