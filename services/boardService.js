import boardModel from "../db/models/boardModel";
import UserModel from "../db/models/userModel";
import dbConnect from "../db/dbConnect";

dbConnect();

export const allBoards = async () => {

    const allBoards = await boardModel.find();

    return {
        allBoards
    }

}