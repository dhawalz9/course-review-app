import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    userhandle:{
        type: String,
        required: false,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    upVotes: {
        type: Number,
        required: true,
        default: 0
    },
    flags: {
        type: Number,
        required: true,
        default: 0
    },
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;