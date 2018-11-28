    /*
    This file will responsable by routers.
    */

    //Importing the express.
    var express = require('express');
    var router = express.Router();

    //Importing users controller.
    var userController = require('../controller/userController');
    //Importing basic Informations controller.
    var basicInfoController = require('../controller/basicInfoController');
    
        //Route main.
        router.get('/',function(req,res,next){
            res.render('index',{title:"Express"}); 
        });

        //Routers to users.  
            router.get('/users',function(req,res){userController.index(req,res)});
            router.get('/user/create',function(req,res){userController.create(req,res)});
            router.get('/user/edit/:name',function(req,res){userController.edit(req,res)});
            router.post('/user/add',function(req,res){userController.add(req,res)});
            router.post('/user/alter',function(req,res){userController.alter(req,res)});
            router.get('/user/delete/:name',function(req,res){userController.delete(req,res)});

        //Routes to basic informations.   
            router.get('/basicinfo',basicInfoController.index);


        module.exports = router;