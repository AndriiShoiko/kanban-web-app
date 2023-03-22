import { setCookie, getCookies, deleteCookie } from 'cookies-next';
import { registrationUser, activationUser, loginUser, logoutUser, refreshUserToken } from "../services/userService";
import validator from 'validator';
import ms from "ms";

export const registration = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                error: "email isn't valid"
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                error: "password don't be empty"
            });
        }

        const userData = await registrationUser(email, password);

        setCookie('accessToken', userData.accessToken, { req, res, maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME) / 1000, httpOnly: true });

        return res.status(200).json({
            success: true,
            data: {
                ...userData
            }
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }

}

export const activation = async (req, res) => {

    try {

        const { activationLink } = req.body;

        if (!activationLink) {
            return res.status(400).json({
                success: false,
                error: "Activation link don't be empty."
            });
        }

        await activationUser(activationLink);

        return res.status(200).json({
            success: true,
            error: "User is activated."
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }

}

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                error: "email isn't valid"
            });
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                error: "password don't be empty"
            });
        }

        const userData = await loginUser(email, password);
        setCookie('accessToken', userData.accessToken, { req, res, maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME) / 1000, httpOnly: true });

        return res.status(200).json({
            success: true,
            data: {
                ...userData
            }
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }
}

export const logout = async (req, res) => {

    try {

        const { accessToken } = getCookies({ req, res });
        const token = logoutUser(accessToken);
        deleteCookie('accessToken', { req, res });

        return res.status(200).json({
            success: true,
            token
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }
}