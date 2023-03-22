import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import userModel from "../db/models/userModel";
import dbConnect from "../db/dbConnect";

import { addToQueueActivationLink } from "./aws/sqsSendMail";
import { generateToken, removeToken, validateRefreshToken, findRefreshToken, saveToken } from "./tokenService";

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
    const token = generateToken({ ...userDto });

    await saveToken(userDto.id, token.accessToken);

    return {
        ...token,
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
    const token = generateToken({ ...userDto });

    await saveToken(userDto.id, token.accessToken);

    return {
        ...token,
        user: userDto
    }

}

export const logoutUser = async (accessToken) => {

    if (!accessToken) {
        throw new Error("Token isn'n valid.");
    }

    const token = await removeToken(accessToken);
    return token;

}