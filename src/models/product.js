import mongoose from "mongoose";
// const { Schems } = mongoose

const productSchems = new mongoose.Schema({
    name: { type: String, require: true },
    price: Number,
    description: String,
})
export const Product = mongoose.model("Product", productSchems)