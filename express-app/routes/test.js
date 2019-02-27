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
  res.render('test');
});

router.post('/', function (req, res, next) {
//
})

module.exports = router;