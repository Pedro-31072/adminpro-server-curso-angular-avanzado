const { Schema, model } = require("mongoose");
const UserSchema = Schema({
  name: {
    type: String,
    required: [true, "User's name is required"],
  },
  email: {
    type: String,
    required: [true, "User's email is required"],
    unique: [true, "The user's email must be unique"],
  },
  password: {
    type: String,
    required: [true, "User's password is required"],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: [true, "User role is required"],
    default: "USER_ROLE",
    enum: {
      values: ["ADMIN_ROLE", "USER_ROLE"],
      message: "{VALUE} is not an allowed role",
    },
  },
  google: {
    type: Boolean,
  },
});

module.exports = model("User", UserSchema);
