import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
    },
);

export default mongoose.models.boardModel || mongoose.model("boardModel", boardSchema);