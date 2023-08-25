'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {

    static associate(models) {
      // define association here
      Ingredient.belongsTo(models.Item)
    }
  }
  Ingredient.init({
    ItemId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};