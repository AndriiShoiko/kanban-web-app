import {registrationToken} from "../services/tokenService";

export const registration = async (req, res) => {

    try {
        registrationToken();
        return res.status(200).json({
            success: true,
            message: 'OK',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
        });
    }

}