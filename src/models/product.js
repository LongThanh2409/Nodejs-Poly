import mongoose from "mongoose";
// const { Schems } = mongoose

const productSchems = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
})
export const Product = mongoose.model("Product", productSchems)