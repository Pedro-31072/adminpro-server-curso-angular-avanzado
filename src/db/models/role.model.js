const { Schema, model } = require("mongoose");
const RoleSchema = Schema({
  role: {
    type: String,
    required: [true, "User role is required"],
    default: "USER_ROLE",
    enum: {
      values: ["ADMIN_ROLE", "USER_ROLE"],
      message: "{VALUE} is not an allowed role",
    },
  },
});
module.exports = model("Role", RoleSchema);
