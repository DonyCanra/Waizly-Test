const { User, Category, Item, Ingredient } = require("../models");
const { checkPassword } = require("../helpers/bcrypt");
const { SignToken } = require("../helpers/jwt");

class AdminController {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) throw { name: "NameRequired" };

      if (!password) throw { name: "PasswordRequired" };

      const user = await User.findOne({ where: { email } });
      if (!user) throw { name: "InvalidUser" };

      const isPasswordCorrect = checkPassword(password, user.password);
      if (!isPasswordCorrect) throw { name: "InvalidUser" };

      res.status(200).json({ access_token: SignToken({ id: user.id }) });
    } catch (err) {
      next(err);
    }
  }

  static async dashboard(req, res, next) {
    try {
      const users = await User.findAll();
      const categories = await Category.findAll();
      const items = await Item.findAll();

      const countUser = users.length;
      const countCategory = categories.length;
      const countItem = items.length;

      res.status(200).json({ countUser, countCategory, countItem });
    } catch (err) {
      next(err);
    }
  }
  static async listUsers(req, res, next) {
    try {
      const users = await User.findAll();

      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async user(req, res, next) {
    try {
      const { id } = req.user;

      const user = await User.findByPk(+id);
      if (!user) throw { name: `NotFound` };

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }


  static async listItems(req, res, next) {
    try {
      const items = await Item.findAll({
        include: [Category, User],
        order: [["name", "ASC"]],
      });

      res.status(200).json(items);
    } catch (err) {
      next(err);
    }
  }

  static async createItem(req, res, next) {
    try {
      const UserId = req.user.id;
      const { name, description, price, imgUrl, CategoryId, ingredients } = req.body;
      let globArr = [];

      const item = await Item.create({
        name,
        description,
        price,
        imgUrl,
        UserId,
        CategoryId,
      });

      let arr = ingredients;
      let answ = arr.split(",");
      answ.forEach(function (obj) {
        globArr.push(obj);
      });
      // console.log(globArr);

      const data = await Ingredient.bulkCreate([
        {
          ItemId: item.id,
          name: globArr,
        },
      ]);

      res.status(201).json(data);
    } catch (err) {
      next(err);
    }
  }

  static async getItemById(req, res, next) {
    try {
      const { id } = req.params;
      const item = await Item.findOne({
        where: { id },
      });

      if (!item) throw { name: "NotFound" };

      res.status(200).json(item);
    } catch (err) {
      next(err);
    }
  }
  static async updateItem(req, res, next) {
    try {
      const { id } = req.params;
      const UserId = req.user.id;
      const { name, description, price, imgUrl, CategoryId } = req.body;

      const findItem = await Item.findByPk(+id);
      if (!findItem) throw { name: "NotFound" };

      await Item.update(
        {
          name,
          description,
          price,
          imgUrl,
          UserId,
          CategoryId,
        },
        { where: { id } }
      );

      res.status(200).json({ message: `Item with ${id} has been updated` });
    } catch (err) {
      next(err);
    }
  }

  static async modifyItem(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const item = await Item.findByPk(+id);
      if (!item) throw { name: "NotFound" };

      await Item.update({ status }, { where: { id } });

      res.status(200).json({ message: `Item ${id} has been modified` });
    } catch (err) {
      next(err);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;

      const item = await Item.findByPk(+id);
      if (!item) throw { name: "NotFound" };

      await Item.destroy({
        where: { id },
        cascade: true,
      });

      res.status(200).json({ message: `Item with id ${id} has been deleted` });
    } catch (err) {
      next(err);
    }
  }

  static async registerAdmin(req, res, next) {
    try {
      const { username, email, password, photoUser, address } = req.body;

      const user = await User.create({ username, email, password, photoUser, address });

      res.status(201).json({
        message: `Admin with ${user.email} is been created`,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminController;
