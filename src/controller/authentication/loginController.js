const User = require("../../models/userModel");
const bcryptjs = require("bcryptjs");

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
    res.status(200).json({
      status: "success",
      message: "Successful operation",
      user: {
        email: user.email,
        owner: user.owner,
      },
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
