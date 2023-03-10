import { registration } from "../../../controllers/tokenController";

export default async function (req, res) {

    return await registration(req, res);

}