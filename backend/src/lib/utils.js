import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {

    if(!userId || !process.env.JWT_SECRET) {
        throw new Error("userId or jwt_secret is not defined.");
    }
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });

    return token;
};

