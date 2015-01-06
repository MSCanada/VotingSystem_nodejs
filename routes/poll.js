var express = require('express');
var router = express.Router();
var mongo_enter=require('../public/javascripts/mongo_enter.js');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('poll', { title: 'poll',status:'' });
});

router.post('/',function(req,res){

res.render('poll',{title: 'poll', status:'Pole Created'});
mongo_enter.createpoll(req.body.question,req.body.option1,req.body.option2,req.body.option3,req.body.option4)

});














module.exports = router;