
const mongoose = require("mongoose");

const { positionschema } = require("../schema/positionsSchema");

const positionModel = mongoose.model("position", positionschema);

module.exports = { positionModel };