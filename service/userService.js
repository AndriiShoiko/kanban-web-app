import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';

import userModel from "../db/models/userModel";
import dbConnect from "../db/dbConnect";

import { addToQueueActivationLink } from "./aws/sqsSendMail";
import { generateTokens, saveToken } from "./tokenService";

import UserDto from "./dtos/userDto";

dbConnect();

export const registrationUser = async (email, password) => {

    const candidate = await userModel.findOne({ email: email });
    if (candidate) {
        throw new Error(`User with this email ${email} already exists`);
    }

    const hashPass = await bcrypt.hash(password, 2);
    const activationLink = uuidv4();

    const user = await userModel.create({ email, password: hashPass, activationLink });
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