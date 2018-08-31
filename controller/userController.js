    var user = require('../models/Users');//Importing the model of users.
    var users;//Declaring variable that receive the users.

    exports.index = function(req,res){//Method to get list of users and render in a view.
        users = user.list(); //Receiving all the users.
        res.render('user/index',{users});//Redering a view with all the users.
    };
    
    exports.create = function(req,res){//Method to renders the create view.
        res.render('user/add');//Renders the view that create one user.
    };
   
    exports.edit = function(req,res){ //Method to renders the edit view.
        let u = user.get(req.params.name);//Get the user to edit.
        res.render('user/edit',{u});//Renders the view with the user to be edited.
    };
    
    exports.add = function(req,res){//Method to save user, after render in index view.
        user.save(req,res);//Store user.
        res.redirect('/users');//Redirecting to users view.
    };
    
    exports.alter = function(req,res){//Method to edit user, after render in index view.
        user.update(req,res);//Update user.
        res.redirect('/users');//Redirecting to users view.
    };
    
    exports.delete = function(req,res){//Method to delete a user and render index view.
        user.remove(req,res);//Remove user.
        res.redirect('/users');//Redirecting to users view.
    };