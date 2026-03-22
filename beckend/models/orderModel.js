const mongoose =require("mongoose");
const { orderSchema } = require("../schema/orderSchmea");



const orderModel= mongoose.model("order",orderSchema)

module.exports={orderModel}