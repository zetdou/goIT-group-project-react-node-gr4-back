//obsługa /auth/
const express = require("express");
const router = express.Router();
const { signup } = require("../controller/authentication/registerController");
const { login } = require("../controller/authentication/loginController");
const { validateBody } = require("../middleware/validationMiddleware");
const { registerSchema, loginSchema } = require("../utils/userValidator");

router.post("/register", validateBody(registerSchema), signup);
router.post("/login", validateBody(loginSchema), login);

module.exports = router;
