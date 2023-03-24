import mongoose from "mongoose";
// const { Schems } = mongoose

const productSchems = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
})
export const Product = mongoose.model("Product", productSchems)