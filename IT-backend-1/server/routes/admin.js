const express = require("express");
const router = express.Router();
const authorization = require("../middlewares/authorization");
const AdminController = require("../controllers/AdminController");

router.use("/dashboard", AdminController.dashboard);

router.get("/users", AdminController.listUsers);
router.get("/profile", AdminController.user);

router.get("/items", AdminController.listItems);
router.post("/items", AdminController.createItem);
router.get("/items/:id", AdminController.getItemById);
router.put("/items/:id", AdminController.updateItem);
router.patch("/items/:id", AdminController.modifyItem);
router.delete("/items/:id", AdminController.deleteItem);
router.post("/register", authorization, AdminController.registerAdmin);

module.exports = router;
