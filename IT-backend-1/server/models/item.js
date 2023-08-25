"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // define association here
      Item.belongsTo(models.User);
      Item.belongsTo(models.Category);
      Item.hasMany(models.Ingredient);
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Name is required`,
          },
          notNull: {
            msg: `Name is required`,
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Description is required`,
          },
          notNull: {
            msg: `Description is required`,
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Price is required`,
          },
          notNull: {
            msg: `Price is required`,
          },
          min: {
            args: 100000,
            msg: `Minimum price is 100000`,
          },
        },
      },
      imgUrl: DataTypes.STRING,
      status: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );

  Item.beforeCreate("addItem", (item) => {
    item.status = `Active`;
  });

  return Item;
};
