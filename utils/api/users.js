import { $apiServer, getBearerFromRequest } from ".";

export const getUserData = async (req, res) => {

    const responce = await $apiServer.get("/user", {
        headers: getBearerFromRequest(req, res)
    });

    return await responce.data.result;

}