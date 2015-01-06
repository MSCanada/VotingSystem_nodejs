var express = require('express');


var router = express.Router();
var mongo_enter=require('../public/javascripts/mongo_enter.js');



/* GET home page. */
router.get('/', function(req, res) {
mongo_enter.find();
//mongo_enter.sleep(3000);
id=mongo_enter.viewpoll();	

for(var i=0;i<id.length;i++)
{
if(global.name==id[i].Polling[0].Question)
{
	global.index=i;
}
}

console.log(global.index);






  res.render('votepoll', { title: 'Vote Polls',question:id[index].Polling[0].Question,option1:id[index].Polling[0].Option1,option2:id[index].Polling[0].Option2,option3:id[index].Polling[0].Option3,option4:id[index].Polling[0].Option4 });

});


router.post('/',function(req,res){
mongo_enter.updatepoll(req.body.option,index);


res.redirect('/users');

});


module.exports = router;