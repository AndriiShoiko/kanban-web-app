import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema(
    {
        refreshToken: {
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
  mongoose.models.TokenModel || mongoose.model("TokenModel", TokenSchema);