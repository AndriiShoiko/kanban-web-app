import { setCookie } from 'cookies-next';
import { registrationUser, activationUser } from "../service/userService";
import validator from 'validator';

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

        setCookie('refreshToken', userData.refreshToken, { req, res, maxAge: 30 * 24 * 60 * 60, httpOnly: true });

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