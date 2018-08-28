
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
    //Method to render the edit view.
    exports.edit = function(req,res){
        let u = user.get(req.params.name);
        res.render('user/edit',{u});
    };
    //Method to save user, after render in index view.
    exports.add = function(req,res){
        user.save(req,res);
        res.redirect('/users');
    };
    //Method to edit user, after render in index view.
    exports.alter = function(req,res){
        user.update(req,res);
        res.redirect('/users');
    };
    //Method to delete a user and render index view.
    exports.delete = function(req,res){
        user.remove(req,res);
        res.redirect('/users');
    };