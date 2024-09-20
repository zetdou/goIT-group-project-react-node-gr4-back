//obsługa /auth/
const express = require("express");
const router = express.Router();
const { signup } = require("../controller/authentication/registerController");

router.post("/register", signup);

module.exports = router;
