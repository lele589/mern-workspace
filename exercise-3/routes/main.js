const router = require('express').Router();

// GET
router.get('/index', function(req, res) {
  res.render('main/index', { title: ' Página de inicio' });
});

router.get('/about', function(req, res) {
  res.render('main/about', { title: 'Autor de la aplicación' });
});

module.exports = router;
