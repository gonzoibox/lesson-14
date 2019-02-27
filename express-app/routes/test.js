var express = require('express');
var router = express.Router();

/* GET test page. */
router.all('/', function (req, res, next) {
  let text = req.body.txt;
  res.render('test', {
    text: text
  });
  next();
});

router.get('/', function (req, res, next) {

  res.render('test', {
    text: text
  });
});

router.post('/', function (req, res, next) {
  console.log(req.body.txt);

  req.body.txt;
  //res.send(`Data ${req.body.txt} was sent`);
})

module.exports = router;