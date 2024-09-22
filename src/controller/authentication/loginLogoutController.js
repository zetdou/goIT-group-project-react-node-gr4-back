const User = require("../../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Invalid email or password" });
    }
    const payload = {
      id: user._id,
      email: user.email,
      owner: user.owner,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({
      status: "success",
      message: "Successful operation",
      token,
      user: {
        email: user.email,
        owner: user.owner,
      },
    });
  } catch (error) {
    next(error);
  }
}

async function logout(req, res) {
  res.status(204).json({});
}
module.exports = { login, logout };
