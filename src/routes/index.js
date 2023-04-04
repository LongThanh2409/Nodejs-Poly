import express from "express"
import product from "./product"
import auth from "./auth"
import category from "./category"
const router = express.Router()
router.use("/products", product)
router.use("/athu", auth)
router.use("/category", category)
export default router