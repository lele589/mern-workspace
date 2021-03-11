var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Petición GET /about');
});

module.exports = router;
