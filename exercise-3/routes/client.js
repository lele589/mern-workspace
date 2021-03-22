const router = require('express').Router();
var Client = require('../models/Client');

// GET
router.get('/index', function(req, res) {
  Client.find()
    .then(clients => {
      res.render('client/index', { title: 'Listado de clientes', clients })
    })
    .catch(error => console.log(error));
});

router.get('/new', function(req, res) {
  res.render('client/new', { title: 'Nuevo cliente' });
});

router.get('/delete/:clientId', (req, res) => {
  Client.findByIdAndDelete(req.params.clientId)
    .then(deletedClient => {
      console.log(deletedClient);
      res.redirect('/client/index');
    })
    .catch(error => console.log(error));
});

// POST
router.post('/new', formChanges, (req, res) => {
  Client.create(req.body)
    .then(newClient => {
      console.log(req.body);
      res.redirect('/client/index');
    })
    .catch(error => console.error(error));
});


// Middleware
function formChanges(req, res, next) {
  req.body.experience = parseFloat(req.body.experience);
  req.body.isWorking = req.body.isWorking ? true : false;
  next();
}

module.exports = router;
