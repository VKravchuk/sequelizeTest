'use strict';


var ControllerBuilder = function (model) {
    this.model = model;
};

ControllerBuilder.prototype = {
    getAll : function ( params ) {
        this.model.findAll(params).then(function(users) {
            res.send(users);
        });
    }
};


module.exports = ControllerBuilder;