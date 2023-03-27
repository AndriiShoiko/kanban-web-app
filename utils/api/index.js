import axios from "axios";
import { getCookies } from "cookies-next";

export const $api = axios.create({
    withCredentials: true,
    baseURL: "/api"
});

export const $apiServer = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:3000/api/"
});

export const getBearerFromRequest = (req, res) => {
    
    const { accessToken } = getCookies({ req, res });

    return {
        "Authorization": "Bearer " + accessToken
    }

} 