//model uzytkownika mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  transactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Transaction",
    },
  ],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
