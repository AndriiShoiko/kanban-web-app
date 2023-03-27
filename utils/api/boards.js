import { $apiServer, getBearerFromRequest } from ".";

export const getAllUserBoards = async (req, res) => {

    const response = await $apiServer.get("/boards", {
        headers: getBearerFromRequest(req, res)
    });

    return await response.data.result.allBoards;

}