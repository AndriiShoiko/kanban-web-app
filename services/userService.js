import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import userModel from "../db/models/userModel";
import dbConnect from "../db/dbConnect";

import { addToQueueActivationLink } from "./aws/sqsSendMail";
import { generateTokens, saveToken, removeToken, validateAccessToken, validateRefreshToken, findToken, findRefreshToken } from "./tokenService";

import UserDto from "./dtos/userDto";
import { makeUserRef } from "./utils";

dbConnect();

export const registrationUser = async (email, password) => {

    const candidate = await userModel.findOne({ email: email });
    if (candidate) {
        throw new Error(`User with this email ${email} already exists`);
    }

    const hashPass = await bcrypt.hash(password, 2);
    const activationLink = uuidv4();
    const userRef = makeUserRef();

    const user = await userModel.create({ email, password: hashPass, activationLink, userRef });
    await addToQueueActivationLink(email, activationLink);

    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto });

    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }

}

export const activationUser = async (activationLink) => {

    const user = await userModel.findOne({ activationLink });

    if (!user) {
        throw new Error("User is not found.");
    }

    user.isActivated = true;
    await user.save();

}

export const loginUser = async (email, password) => {

    const findUser = await userModel.findOne({ email });
    if (!findUser) {
        throw new Error(`User with email ${email} not found`);
    }

    const isPassEquals = await bcrypt.compare(password, findUser.password);
    if (!isPassEquals) {
        throw new Error(`Password isn't correct.`);
    }

    const userDto = new UserDto(findUser);
    const tokens = generateTokens({ ...userDto });

    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }

}

export const logoutUser = async (refreshToken) => {

    if (!refreshToken) {
        throw new Error("Refresh token isn'n valid.");
    }

    const token = await removeToken(refreshToken);
    return token;

}

export const refreshUserToken = async (refreshToken) => {

    if (!refreshToken) {
        throw new Error("Refresh token isn'n valid.");
    }

    const userData = validateRefreshToken(refreshToken);
    const tokenFromDB = await findRefreshToken(refreshToken);

    if (!userData || !tokenFromDB) {
        throw new Error("User unauthorized");
    }

    const user = await userModel.findById(userData.id);

    const userDto = new UserDto(user);
    const tokens = generateTokens({ ...userDto });

    await saveToken(userDto.id, tokens.refreshToken);

    return {
        ...tokens,
        user: userDto
    }

}