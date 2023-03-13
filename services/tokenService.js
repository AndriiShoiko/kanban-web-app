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
    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, refreshToken });
    return token;

}

export const removeToken = async (refreshToken) => {

    const tokenData = await tokenModel.deleteOne({ refreshToken });
    return tokenData;

}

export const validateAccessToken = (token) => {

    try {

        const userData = jwt.verify(token, process.env.ACCESS_TOKEN);
        return userData;

    } catch (error) {
        return null;
    }

}

export const validateRefreshToken = (token) => {

    try {

        const userData = jwt.verify(token, process.env.REFRESH_TOKEN);
        return userData;

    } catch (error) {
        return null;
    }

}

export const findRefreshToken = async (refreshToken) => {

    const tokenData = await tokenModel.findOne({ refreshToken });
    return tokenData;

}