import { getAllWithCheckAccess, addBoardWithCheckAccess } from "../../../controllers/boardController";

export default async function (req, res) {

    const { method } = req;

    if (method === "GET") {
        return getAllWithCheckAccess(req, res);
    }

    if (method === "POST") {
        return addBoardWithCheckAccess(req, res);
    }    

    return res.status(404).json({
        success: false,
        error: "Not found."
    });

}