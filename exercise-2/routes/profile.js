var express = require('express');
var router = express.Router();

router.get('/main', function(req, res) {
  res.send('Petición GET /profile/main');
});

router.get('/details', function(req, res) {
  res.send('Petición GET /profile/details');
});

module.exports = router;
