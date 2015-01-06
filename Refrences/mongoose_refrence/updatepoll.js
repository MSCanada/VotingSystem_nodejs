function updatepoll(option,i)
{
var mymodel=require('./mymodel.js');
var Pollingmodel=mymodel.mymodel();
Pollingmodel.find(function(err,doc){

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
