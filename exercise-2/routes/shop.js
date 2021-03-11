var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('Petición GET /shop');
});

router.get('/house', function(req, res) {
  res.send('Petición GET /shop/house');
});

module.exports = router;
