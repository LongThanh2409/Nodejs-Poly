import mongoose from "mongoose";
// const { Schems } = mongoose

const productSchems = new mongoose.Schema({
    nameProducts: { type: String, require: true, minLength: 3 },
    priceProducts: { type: Number, require: true },
    Old_priceProducts: { type: Number, require: true },
    descriptionProducts: { type: String, require: true },
    imageProducts: { type: String, require: true },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "category",
    },
})
export const Product = mongoose.model("Product", productSchems)