import mongoose from "mongoose";
// const { Schems } = mongoose

const userSchems = new mongoose.Schema({
    name: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    role: { type: String, default: "member" }
})
export const User = mongoose.model("User", userSchems)