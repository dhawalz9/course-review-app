import Course from "../models/courseModel.js";
import User from "../models/userModel.js";

export const getCourseController = async(req, res) => {

    // if(!req.user){
    //     return res.status(400).send({
    //         success:false,
    //         message:"Please login to continue"
    //     })
    // }

    try {
        const courses = await Course.find({});
        res.status(200).send({
            success:true,
            message:"Courses fetched successfully",
            courses
        })
    } catch (error) {
        console.log("error : getting course",error)
        res.atatus(400).send({
            success:false,
            message:"Error in getting courses",
            error
        })
    }
}

export const addCourseController = async(req, res) => {

    // if(!req.user){
    //     return res.status(400).send({
    //         success:false,
    //         message:"Please login to continue"
    //     })
    // }

    try {
        const {name, code, semester,year,instructorName} = req.body;
        if( !code || !semester || !year){
            return res.status(400).send({
                success:false,
                message:"Please provide all the details"
            })
        }
        // req.body.createdBy = req.user._id;
        req.body.instructor = [{
            name: instructorName,
            semester: semester,
            year: year
        }];
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            success:true,
            message:"Course added successfully",
            course
        })
    } catch (error) {
        console.log("error : adding course",error)
        res.status(400).send({
            success:false,
            message:"Error in adding course",
            error
        })
    }
}

export const addReviewController = async(req, res) => {
    try {
        const {courseName,courseCode, isIncognito, instructorName, semester, year, review} = req.body;
        if( !courseName || !courseCode || !review || !isIncognito || !instructorName || !semester || !year){
            return res.status(400).send({
                success:false,
                message:"Please provide all the details"
            })
        }
        const course = await Course.findById(courseCode);
        if(!course){
            return res.status(400).send({
                success:false,
                message:"Course not found"
            })
        }
        course.reviews.push({
            isAnonymous: isIncognito,
            user: req.user._id,
            review: review
        });
        await course.save();
        res.status(200).send({
            success:true,
            message:"Review added successfully",
            courseName
        })
    } catch (error) {
        console.log("error : adding review",error)
        res.status(400).send({
            success:false,
            message:"Error in adding review",
            error
        })
    }
}