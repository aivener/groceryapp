'use strict';
module.exports = (sequelize, DataTypes) => {
  var ShoppingList = sequelize.define('ShoppingList', {
    name: DataTypes.STRING
  });

  ShoppingList.associate = function(models) {
    // associations can be defined here
    models.ShoppingList.hasMany(models.ListItem);
  };
  return ShoppingList;
};
