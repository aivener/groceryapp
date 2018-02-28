var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET shopping lists. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Create shopping list */
router.post('/create', function(req, res) {
  models.ShoppingList.create({
    name: req.body.name
  }).then(function() {
    res.redirect('/');
  });
});

/* Delete shopping list */
router.get('/:ShoppingListId/destroy', function(req, res) {
  models.ShoppingList.destroy({
    where: {
      id: req.params.ShoppingListId
    }
  }).then(function() {
    res.redirect('/');
  });
})

/* Add list item to shopping list*/
router.post('/:ShoppingListId/listitems/create', function(req, res) {
  models.ListItem.create({
    ShoppingListId: req.params.ShoppingListId,
    title: req.body.title,
    description: req.body.description
  }).then(function() {
    res.redirect('/');
  });
});

/* Delete list item in shopping list */
router.get('/:ShoppingListId/listitems/:ListItemId/destroy', function (req, res) {
  models.ListItem.destroy({
    where: {
      id: req.params.ListItemId
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
