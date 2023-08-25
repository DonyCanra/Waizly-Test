"use strict";
const { hashPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.hasMany(models.Item);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Username is required`,
          },
          notNull: {
            msg: `Username is required`,
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `Email must be unique`,
        },
        validate: {
          notEmpty: {
            msg: `Email is required`,
          },
          notNull: {
            msg: `Email is required`,
          },
          isEmail: {
            args: true,
            msg: `Format email is wrong`,
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: `Password is required`,
          },
          notNull: {
            msg: `Password is required`,
          },
        },
      },
      role: DataTypes.STRING,
      photoUser: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate("register", (user) => {
    user.password = hashPassword(user.password);
    user.role = `Admin`;
  });

  return User;
};
