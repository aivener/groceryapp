module.exports = (sequelize, DataTypes) => {
  var ListItem = sequelize.define('ListItem', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  ListItem.associate = function(models) {
    // associations can be defined here
    models.ListItem.belongsTo(models.ShoppingList, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };

  return ListItem;
};
