const { Schema, model } = require("mongoose");
const HospitalSchema = Schema({
  name: {
    type: String,
    required: [true,"Hospital name required"],
  },
  img: {
    type: String,
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true,"User reference is required"],
  },
});

module.exports = model("Hospital", HospitalSchema);
