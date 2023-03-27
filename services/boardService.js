import boardModel from "../db/models/boardModel";
import dbConnect from "../db/dbConnect";

dbConnect();

export const allBoards = async (userId) => {

    const allBoards = await boardModel.find({ user: userId });

    return {
        allBoards
    }

}

export const addNew = async (user, name) => {

    const newBoard = await boardModel.create({ name, user });
    await newBoard.save();

    return {
        newBoard
    }

}