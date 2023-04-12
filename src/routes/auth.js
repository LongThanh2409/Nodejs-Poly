import express from "express";
import {
    user_sigup,
    login

} from "../controllers/authu.js";

const router = express.Router();

router.post("/user_sigup", user_sigup);
router.post("/user_login", login);



export default router;