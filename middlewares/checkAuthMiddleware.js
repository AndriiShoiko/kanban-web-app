import { getCookies, setCookie } from 'cookies-next';
import { $api, $apiCookies } from "../utils/api";

export default function (handler) {

    return async (req, res) => {

        try {
            const { accessToken, refreshToken } = getCookies({ req, res });

            if (!refreshToken) {
                return "/";
            }

            if (!accessToken) {
                const responce = await $apiCookies.get("/authorization/refresh/", {
                    headers: {
                        Cookie: req.headers.cookie
                    }
                });

                const responseData = await responce.data;

                if (responseData) {
                    setCookie('refreshToken', responseData.data.refreshToken, { req, res, maxAge: ms(process.env.REFRESH_TOKEN_VALID_TIME) / 1000, httpOnly: true });
                    setCookie('accessToken', responseData.data.accessToken, { req, res, maxAge: ms(process.env.ACCESS_TOKEN_VALID_TIME) / 1000, httpOnly: true });
                }
                return handler(responseData.data.accessToken);
            }

            return handler(accessToken);

        } catch (error) {
            return "/"
        }

    }

}