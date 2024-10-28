import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";



const app = express();

import dataRoute from "./route/data.route.js";
import userRoute from './route/user.route.js'

app.use(cors());
app.use(express.json());


dotenv.config();
const PORT = process.env.PORT || 2001;
const URI = process.env.mongoBD;

// CONECT TO BD
mongoose.connect(URI);
console.log("CONECT TO BD");

// Routers define
app.use("/data", dataRoute);
app.use("/user", userRoute)

// deployment


app.listen(PORT, () => {
  console.log(`server runing on post ${PORT}`);
});
