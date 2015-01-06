var mymodel=require('./mymodel.js');

 //you must use db.Model('MyModel') not mongoose.Model('MyModel') if you use createConnection
 
mymodel.mymodel().find({}, function(err,data){
  
  console.log(data);
});