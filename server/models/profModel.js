import mongoose from "mongoose";

const profSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        }
    ],
    flags: {
        type: Number,
        required: true,
        default: 0
    },
    reviews: [
        {
            isAnonymous: {
                type: Boolean,
                required: true,
                default: false
            },
            user: {
                type:mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            review: {
                type: String,
                required: true
            },
            upVotes: {
                type: Number,
                required: true,
                default: 0
            },
        }
    ]
},{timestamps: true});

const Prof = mongoose.model('Prof', profSchema);

export default Prof;