import express from "express";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv"
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";

import UserRoute from "./routes/user.js"
import ChatRoute from "./routes/chat.js"

dotenv.config({
    path: "./.env",
})

const mongoURI = process.env.MONGO_URI
const port = process.env.PORT || 8000

connectDB(mongoURI)

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello world!!")
})

app.use("/user", UserRoute)
app.use("/chat", ChatRoute)

app.use(errorMiddleware)

app.listen(port, ()=>{
    console.log("server is running on port: " + port);
})