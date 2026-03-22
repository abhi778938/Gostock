const { model } = require("mongoose");
const { userSchema} = require("../schema/userSchema");

const userModel = model("user", userSchema);

module.exports = { userModel };