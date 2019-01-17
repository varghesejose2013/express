var express = require('express');
var router = express.Router();
var us=require('../database/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register.html', { title: 'Express' });
});
router.get('/next', function(req, res, next) {
  res.render('next.html', { title: 'Express' });
});
router.post('/add',(req, res) => {
  var myData=new us (req.body);
  myData.save()
  .then(item => {
    res.send("item saved to database");

  })
  .catch(err =>{
    res.status(400).send("unable to save the database");
  })

});
router.get('/get',function(req,res,next){
  us.find()
  .then(function(doc){
    res.render('view',{item:doc})
  });
  

});

module.exports = router;
