
    //Here could have any connection with an data base.
    //--------------------------------------------------
    var users = ['Igor','Juliana']; //This is a array, where storage the data.
    exports.save = function(req,res){//This method is resposable by storage data in array.
        users.push(req.body.name);//Storing user in users array.
        sort(users);//Sorting users.
        return users;//returning the users after of sorted.
    };

    exports.update = function(req,res){//This method update the data of array.
        var i = users.indexOf(req.body.nameold);//Getting index of the user. 
        users[i] = req.body.name;//Modifying the old name of the user by new name.
        sort(users);//Sorting users.
        return users;//Returning the users, after of sorted.
    };
    
    exports.get = function(name){//This method get a user specific of array.
        let i = users.indexOf(name); //Getting the index of the user by the name parameter.
        return users[i];//Returning the user that references the index getted.
    };
    
    exports.list = function(){//This method get all the data of array.
        sort(users);//Sorting the users.
        return users;//Returning the users, after of sorted.
    };
    
    exports.remove = function(req,res){//This method remove one user of array.
        let i = users.indexOf(req.params.name.toString());//Getting the index of the user by name parameter.
        users.splice(i,1);//Removing user that references the index getted.
        sort(users);//Sorting the users.
        return users;//Returning users, after of sorted.
    };
    
    var sort = function(users){//This method sort the data.
        users.sort();//Sorting the users.
    }

    