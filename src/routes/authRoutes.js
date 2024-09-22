//obsługa /auth/
const express = require("express");
const router = express.Router();
const { signup } = require("../controller/authentication/registerController");
const { login } = require("../controller/authentication/loginController");

router.post("/register", signup);
router.post("/login", login);

module.exports = router;
