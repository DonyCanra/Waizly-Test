"use strict";
const fs = require("fs");
const { hashPassword } = require("../helpers/bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    let data = JSON.parse(fs.readFileSync("./data/users.json", "utf-8")).map((el) => {
      el.password = hashPassword(el.password);
      el.createdAt = el.updatedAt = new Date();
      return el;
    });
    return queryInterface.bulkInsert("Users", data, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
