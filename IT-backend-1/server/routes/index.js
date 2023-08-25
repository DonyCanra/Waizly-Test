const express = require("express");
const AdminController = require("../controllers/AdminController");
const authentication = require("../middlewares/authentication");
const router = express.Router();

router.post("/auth/login", AdminController.login);

router.use(authentication);

// Admin
router.use("/admin", require("./admin"));

module.exports = router;
