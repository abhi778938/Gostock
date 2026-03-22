const {Schema}=require("mongoose");

const orderSchema= new Schema ({
    name: String ,
    price: Number,
    qty: Number,
    mode: String,
})

module.exports={orderSchema}