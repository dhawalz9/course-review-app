import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
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
    flags: {
        type: Number,
        required: true,
        default: 0
    }
}, { _id: false });

const courseModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    flags: {
        type: Number,
        required: true,
        default: 0
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    instructor: [
        {
            name:{
                type: mongoose.Schema.Types.ObjectId,
                ref: '',
                required: false
            },
            semester: {
                type: String,
                Enumerator: ['Odd', 'Even'],
                required: true
            },
            year: {
                type: Number,
                required: true
            }
        },
        
    ],
    reviews: [reviewSchema],
},{timestamps: true});

const Course = mongoose.model('Course', courseModel);

export default Course;