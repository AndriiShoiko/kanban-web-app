import { getAllWithCheckAccess } from "../../../controllers/boardController";

export default async function (req, res) {

    const { method } = req;

    if (method === "GET") {
        return getAllWithCheckAccess(req, res);
    }

    return res.status(404).json({
        success: false,
        error: "Not found."
    });

}