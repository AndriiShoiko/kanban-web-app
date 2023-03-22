import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema(
    {
        accessToken: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
    },
);

module.exports =
  mongoose.models.Tokens || mongoose.model("Tokens", TokenSchema);