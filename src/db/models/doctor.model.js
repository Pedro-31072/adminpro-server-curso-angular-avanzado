const { Schema, model } = require("mongoose");
const DoctorSchema = Schema({
  name: {
    type: String,
    required: [true,"Doctor's name is required"],
  },
  img: {
    type: String,
  },
  User: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true,"User reference is required"],
  },
  Hospital: {
    type: Schema.Types.ObjectId,
    ref: "Hospital",
    required: [true,"Hospital reference is required"],
  },
});

module.exports = model("Doctor", DoctorSchema);
