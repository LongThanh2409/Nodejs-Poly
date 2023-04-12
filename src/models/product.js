import mongoose from "mongoose";
// const { Schems } = mongoose

const productSchems = new mongoose.Schema({
    nameProducts: { type: String, require: true, minLength: 3 },
    priceProducts: { type: Number, require: true },
    Old_priceProducts: { type: Number, require: true },
    descriptionProducts: { type: String, require: true },
    imagesProducts: { type: String, require: true },
    // categoryId: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Category",
    // },
})
export const Product = mongoose.model("Product", productSchems)