import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import passport from "passport";
import session from "express-session";

import path from "path";

import { connectDB } from "./lib/db.js";
import authRoute from "./routes/auth.route.js";
import MessageRoute from "./routes/MessageRoute.route.js";
import { app, server } from "./lib/socket.js";

import "./config/passport.js";

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

// session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "secretKey", 
    cookie: {
        maxAge: 24 * 60 * 60 * 1000,
        secure: false, 
        httpOnly: true,
    }
}));

app.use(passport.initialize());
app.use(passport.session());

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
