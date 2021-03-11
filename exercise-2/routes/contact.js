var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Petición GET /contact');
});

module.exports = router;
