const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: Number,
    require: true,
  },
  // adress: {
  //   type: String,
  //   require: true,
  // },
  password: {
    type: String,
    require: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
