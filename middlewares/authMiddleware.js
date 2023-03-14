import { validateAccessToken } from "../services/tokenService";

export default function (handler) {
    return async (req, res) => {

        try {

            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({
                    success: false,
                    error: "Access error, authorization header not found"
                });
            }

            const acessToken = authHeader.split(' ')[1];
            if (!acessToken) {
                return res.status(401).json({
                    success: false,
                    error: "Access error, token not found"
                });
            }

            const userData = validateAccessToken(acessToken);
            if (!userData) {
                return res.status(401).json({
                    success: false,
                    error: "Access error, token isn'n valid"
                });
            }

            req.user = userData;

            return handler(req, res);

        } catch (error) {

            return res.status(401).json({
                success: false,
                error: error.message
            });

        }

    }
}