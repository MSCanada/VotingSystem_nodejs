function createpoll(question,option1,option2,option3,option4)
{
var mymodel=require('./mymodel.js');
var Pollingmodel=mymodel.mymodel();

var que=new Pollingmodel({"Polling":[
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