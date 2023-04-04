import mongoose from "mongoose";
// const { Schems } = mongoose

const productSchems = new mongoose.Schema({
    nameProducts: { type: String, require: true },
    priceProducts: { type: Number, require: true },
    Old_priceProducts: { type: Number, require: true },
    descriptionProducts: { type: String, require: true },
    imageProducts: { type: String, require: true }
})
export const Product = mongoose.model("Product", productSchems)