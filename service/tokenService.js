import jwt from "jsonwebtoken";
import tokenModel from "../db/models/tokenModel";
import dbConnect from "../db/dbConnect";

dbConnect();

export const generateTokens = (payload) => {

    const accessToken = jwt.sign(payload,
        process.env.ACCESS_TOKEN,
        { expiresIn: process.env.ACCESS_TOKEN_VALID_TIME });

    const refreshToken = jwt.sign(payload,
        process.env.REFRESH_TOKEN,
        { expiresIn: process.env.REFRESH_TOKEN_VALID_TIME });

    return {
        accessToken,
        refreshToken
    }

}

export const saveToken = async (userId, refreshToken) => {

    const tokenData = await tokenModel.findOne({ user: userId });
    if(tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }

    const token = await tokenModel.create({user: userId, refreshToken});
    return token;

} 