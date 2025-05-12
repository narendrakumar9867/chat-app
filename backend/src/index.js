import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoute from "./routes/auth.route.js";
import MessageRoute from "./routes/MessageRoute.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));

app.use("/api/auth", authRoute);
app.use("/api/messages", MessageRoute);

app.listen(PORT, () => {
    console.log(`server is started at ${PORT}`);
    connectDB();
});
