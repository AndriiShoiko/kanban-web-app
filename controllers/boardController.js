import authMiddleware from "../middlewares/authMiddleware";
import accessMiddleware from "../middlewares/accessMiddleware";
import { allBoards } from "../services/boardService";

const getAll = async (req, res) => {

    try {

        const boards = await allBoards();
        return res.status(200).json({
            success: true,
            result: boards
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }

}

const getAllWithCheckAccess = authMiddleware(accessMiddleware(getAll, 'admin'));

export {getAllWithCheckAccess};