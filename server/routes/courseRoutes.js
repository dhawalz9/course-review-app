import express from 'express';
import { addCourseController, getCourseController } from '../controllers/courseController.js';

const router = express.Router();

router.get('/get-courses', getCourseController);

router.post('/add-courses', addCourseController);

export default router;