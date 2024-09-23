const User = require("../../models/userModel");

console.log(User); //zwraca undefined

const updateBalance = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    if (!user) {
      NotFound("User not found");
    }
    res.status(200).json({
      email: user.email,
      balance: user.balance,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updateBalance;
