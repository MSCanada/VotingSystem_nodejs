var express = require('express');
var router = express.Router();
var mongo_enter=require('../public/javascripts/mongo_enter.js');
var id;
var i;
var questions=[];
/* GET home page. */
router.get('/index/:name?', function(req, res) {
global.count=0;
mongo_enter.find();
//mongo_enter.sleep(3000);
id=mongo_enter.viewpoll();
//console.log(id);
 

for (i=0;i<id.length;i++)
{
questions[i]=id[i].Polling[0].Question;

}
global.questions=questions;

var name=req.params.name;
if(name!=null)
{
global.name=name;
res.redirect('/votepoll');
//console.log(global.name);
}
else
res.render('index', { title: 'Welcome to my Polling Website' });
});



module.exports = router;
