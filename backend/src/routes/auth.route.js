import express from "express";
import { signup, login, logout, updateProfile, checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

import passport from "passport";

const router = express.Router();

// Google OAuth routes
router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Successfully logged in",
            user: req.user,
        });
    } else {
        res.status(403).json({
            error: true,
            message: "NOt authorized"
        })
    }
});

router.get("/login/failed", (req, res) => {
    console.log("login failed hit: ");
    res.status(401).json({
        error: true,
        message: "Log in failed",
    })
});

router.get("/google/callback", (req, res, next) => {
    console.log("google callback hit: ");
    next();
},passport.authenticate("google", {
    failureRedirect: "/api/auth/login/failed",
}),
(req, res) => {
    console.log("authentication success, redirect to client url");
    res.redirect(process.env.CLIENT_URL);
}
);

router.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.CLIENT_URL);
});

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, checkAuth);

// NOTE: Make sure to mount this router with the correct prefix in your main app file.
// Example: app.use("/auth", authRouter);
// Then frontend should use: http://localhost:7777/auth/google
// If you use: app.use("/api/auth", authRouter);
// Then frontend should use: http://localhost:7777/api/auth/google

export default router;