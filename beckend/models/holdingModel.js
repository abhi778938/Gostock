const { model } = require("mongoose");
const { holdingsSchema } = require("../schema/holdingsSchema");

const holdingModel = model("holding", holdingsSchema);

module.exports = { holdingModel };