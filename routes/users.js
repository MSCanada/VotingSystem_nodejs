
var express = require('express');
var router = express.Router();
var mongo_enter=require('../public/javascripts/mongo_enter.js');
var object;

router.get('/', function(req, res) {
mongo_enter.find();
object=mongo_enter.viewpoll();
console.log(object);


res.render('users', { title: 'View Poll',question:object[global.index].Polling[0].Question,option1:object[global.index].Polling[0].Option1,option2:object[global.index].Polling[0].Option2,option3:object[global.index].Polling[0].Option3,option4:object[global.index].Polling[0].Option4,
value1:object[global.index].Polling[1].Option1,value2:object[global.index].Polling[1].Option2,value3:object[global.index].Polling[1].Option3,value4:object[global.index].Polling[1].Option4 });




});

module.exports = router;