var mongoose = require('mongoose');
ObjectId = mongoose.Schema.ObjectI;
db = mongoose.createConnection('mongodb://msuhail:cricket_123@ds030607.mongolab.com:30607/msuhail');

function mymodel(){ 
var PollingSchema = new mongoose.Schema({"Polling":[
        {
            Question:String,
            Option1:String,
            Option2:String,
            Option3:String,
            Option4:String
        },
        {
            Question:String,
            Option1:Number,
            Option2:Number,
            Option3:Number,
            Option4:Number
        }
        

]});
var Polling = db.model('Polling',PollingSchema);// if you want different schema then replace PollingSchema with other Schema here.


return Polling;
}
exports.mymodel=mymodel;