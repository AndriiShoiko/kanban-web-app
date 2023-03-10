import { registration } from "../../../controllers/userController";

export default async function (req, res) {

    const { method } = req;

    if (method === "POST") {
        return await registration(req, res);
    }

    return res.status(404).json({
        success: false,
        error: "Not found."
    });

}