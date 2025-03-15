import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./lib/db.js";
import authRoute from "./routes/auth.route.js";
import MessageRoute from "./routes/MessageRoute.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/message", MessageRoute);

app.listen(PORT, () => {
    console.log(`server is started at ${PORT}`);
    connectDB();
});
