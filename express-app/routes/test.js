var express = require('express');
var router = express.Router();

/* GET test page. */
router.all('/', function(req, res, next) {
    res.render('test', {text: req.body.txt});
    next();
  });

router.get('/', function(req, res, next) {
  res.render('test');
});

router.post('/', function(req, res, next){
  console.log(req.body.txt); 
  //res.send(`Data ${req.body.txt} was sent`);
})

module.exports = router;
