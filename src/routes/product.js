import express from "express";
import {
    getAll,
    getDetail,
    create,
    update,
    remove,
    PatchUser
} from "../controllers/product.js";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", getDetail);
router.post("/products", create);
router.put("/products/:id", update);
router.delete("/products/:id", remove);
router.patch("/products/:id", PatchUser);

export default router;