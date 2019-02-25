var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
  const {age, gender} = req.query;
  console.log(age, gender);
  res.render('index', { title: 'Express', age: 'Age', gender: 'Gender' });
});

router.post('/test', function(req, res, next){
  console.log(req.body.txt); 
  res.send(`Data ${req.body.txt} was sent`);
})

module.exports = router;
