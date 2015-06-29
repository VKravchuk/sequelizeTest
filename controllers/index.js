'use strict';

var fs        = require('fs');
var path      = require('path')
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var api        = {};

fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf('.') !== 0) && (file !== basename);
    })
    .forEach(function(file) {
        console.log(file);/*
        var model = sequelize['import'](path.join(__dirname, file));
        api[model.name] = model;*/
    });


module.exports = api;
