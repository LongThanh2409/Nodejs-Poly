import express from "express";
// import routerProduct from "./routes/product.js";
// import routerUser from "./routes/auth.js";
import routers from "./routes/index.js"
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(`${process.env.API_DB}`)
// app.use("/api", routerProduct);
// app.use("/api", routerUser);
app.use("/api", routers)
export const viteNodeApp = app;
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on ${process.env.PORT}`);
// });


// Step 1: tạo file db.json
// Step 2: cài đặt json-server.
// Step 3: cài đặt concurrently
// Step 4: config lại package.json
// Step 5: install axios
// Step 6: Code getlist, getdetails

// Config dotenv
// Step 1: install
// Step 2: import and config
// Step 3: create .env file
// Step 4: use process.env.TEN_BIEN
// Step 5: gitignore