var express = require('express');
var router = express.Router();

var signups = require("./config").signups;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { signups: signups, numSignups: signups.length });
});

router.post('/submit-email', function(req, res, next) {
  signups.push({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
  });
  res.render('index', { signups: signups, numSignups: signups.length, submitted: true });
})

module.exports = router;
