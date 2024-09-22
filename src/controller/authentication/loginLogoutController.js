const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const User = require("../../models/userModel");
const { transaction } = require("../../models/transactionModel");

async function login(req, res, next) {
  try {
    const { nanoid } = await import("nanoid");
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ message: "Invalid email or password" });
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(403).json({ message: "Invalid email or password" });
    }
    const sid = nanoid();
    const payload = {
      id: user._id,
      email: user.email,
      owner: user.owner,
      sid,
    };

    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });
    const refreshToken = jwt.sign(payload, process.env.REFRESH_JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({
      status: "success",
      message: "Successful operation",
      accessToken,
      refreshToken,
      sid,
      userData: {
        email: user.email,
        balance: user.balance,
        owner: user.owner,
        transactions: user.transactions,
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
