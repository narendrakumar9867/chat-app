import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


import path from "path";

import { connectDB } from "./lib/db.js";
import authRoute from "./routes/auth.route.js";
import MessageRoute from "./routes/MessageRoute.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();

// Increase payload size limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cookieParser());
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));

app.use("/api/auth", authRoute);
app.use("/api/messages", MessageRoute);

if(process.env.NODE_ENV==="production") {
    app.use(express.static(path.join(__dirname, "../../frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../../frontend", "dist", "index.html"));
    })
}

server.listen(PORT, () => {
    console.log(`server is started at ${PORT}`);
    connectDB();
});
