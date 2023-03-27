import jwt from "jsonwebtoken";
import tokenModel from "../db/models/tokenModel";
import dbConnect from "../db/dbConnect";

dbConnect();

export const generateToken = (payload) => {

    const accessToken = jwt.sign(payload,
        process.env.ACCESS_TOKEN,
        { expiresIn: process.env.ACCESS_TOKEN_VALID_TIME });

    return {
        accessToken
    }

}

export const saveToken = async (userId, accessToken) => {

    const tokenData = await tokenModel.findOne({ user: userId });
    if (tokenData) {
        tokenData.accessToken = accessToken;
        return tokenData.save();
    }

    const token = await tokenModel.create({ user: userId, accessToken });
    return token;

}

export const removeToken = async (accessToken) => {

    const tokenData = await tokenModel.deleteOne({ accessToken });
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

