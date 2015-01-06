
var mongoose=require("mongoose");
mongoose.connect('mongodb://msuhail:cricket_123@ds030607.mongolab.com:30607/msuhail');
var db=mongoose.connection;
var object;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
var Schema   = mongoose.Schema,
ObjectId = Schema.ObjectId

var PollingSchema = new Schema({"Polling":[
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

var Polling = mongoose.model('Polling', PollingSchema);
function createpoll(question,option1,option2,option3,option4)
{
var que=new Polling({"Polling":[
        {
            Question:question,
            Option1:option1,
            Option2:option2,
            Option3:option3,
            Option4:option4
        },
        {
            Question:"What is your Value",
            Option1:0,
            Option2:0,
            Option3:0,
            Option4:0
        }
        
]});
que.save();
//console.log(que.Polling[1].Option1);
}
exports.createpoll=createpoll;

function find(){

Polling.find(function(err, result) {
  
function viewpoll()
{
    return result;
}
exports.viewpoll=viewpoll;
});

}

exports.find=find;



function updatepoll(option,i)
{
console.log(i);
console.log(option);
Polling.find(function(err,doc){

if(option=="option1")
{
 doc[i].Polling[1].Option1++;
 
 doc[i].save();
}
if(option=="option2")
{
 doc[i].Polling[1].Option2++;
 
 doc[i].save();
}
if(option=="option3")
{
 doc[i].Polling[1].Option3++;
 
 doc[i].save();
}
if(option=="option4")
{
 doc[i].Polling[1].Option4++;
 
 doc[i].save();
}


});
}
exports.updatepoll=updatepoll;
})


