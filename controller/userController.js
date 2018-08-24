
    //Importing the model of users.
    var user = require('../models/Users');
    //Declaring variable that storage the users.
    var users;
    //Method to get list of users and render in a view.
    exports.index = function(req,res){
        users = user.list();
        res.render('user/index',{users});
    };
    //Method to render the create view.
    exports.create = function(req,res){
        res.render('user/add');
    };
    //Method to save user, after render in index view.
    exports.add = function(req,res){
        users = user.save(req,res);
        res.render('user/index',{users});
    };
    //Method to delete a user and render index view.
    exports.delete = function(req,res){
        users = user.remove(req,res);
        res.render('user/index',{users});
    };