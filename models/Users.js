
    //Here could have any connection with an data base.
    //--------------------------------------------------

    //This is a array, where storage the data.
    var users = ['Igor','Juliana'];
    //This method is resposable by storage data in array.
    exports.save = function(req,res){
        users.push(req.body.name);
        return users;
    };
    //This method update the data of array.
    exports.update = function(req,res){
        var i = users.indexOf(req.body.nameold);
        users[i] = req.body.name;
        return users;
    };
    //This method get a user specific of array.
    exports.get = function(name){
        let i = users.indexOf(name); 
        return users[i];
    };
    //This method get all the data of array.
    exports.list = function(){
        return users;
    };
    //This method remove one user of array.
    exports.remove = function(req,res){
        let i = users.indexOf(req.params.name.toString());
        users.splice(i,1);
        return users;
    };