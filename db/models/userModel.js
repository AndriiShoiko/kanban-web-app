import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema(
    {
        password: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate: [validator.isEmail],
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'guest'],
            default: 'user',
        },
        isActivated: {
            type: Boolean,
            default: false
        },
        activationLink: {
            type: String,
        },
        userRef: {
            type: String,
            required: true,
            unique: true,
        },
    },
);

export default mongoose.models.Users || mongoose.model("Users", userSchema);