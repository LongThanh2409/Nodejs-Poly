import express from "express";
import routers from "../routes/index.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(`${process.env.API_DB}`)

app.use("/", routers)
export const viteNodeApp = app;


