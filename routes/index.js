var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res) {
  models.ShoppingList.findAll({
    include: [ models.ListItem ]
  }).then(function(shoppinglists) {
    res.render('index', {
      title: 'Shopping List App Title',
      shoppinglists: shoppinglists
    });
  });
});

module.exports = router;
