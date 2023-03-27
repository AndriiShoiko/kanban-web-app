import authMiddleware from "../middlewares/authMiddleware";
import accessMiddleware from "../middlewares/accessMiddleware";
import { addNew, allBoards } from "../services/boardService";

const getAll = async (req, res) => {

    try {

        const userId = req.user.id;

        const boards = await allBoards(userId);
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

const addBoard = async (req, res) => {

    try {

        const { user, name } = req.body;

        const board = await addNew(user, name);
        return res.status(200).json({
            success: true,
            result: board
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }

}

const getAllWithCheckAccess = authMiddleware(accessMiddleware(getAll, 'user'));
export {getAllWithCheckAccess};

const addBoardWithCheckAccess = authMiddleware(accessMiddleware(addBoard, 'user'));
export {addBoardWithCheckAccess};