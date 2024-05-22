import express from 'express';
import {loginUser} from "../../controller/auth/authController.js";
import {registerUser} from "../../controller/userController.js";

const router = express.Router();

// POST /api/auth/login
router.post('/login', loginUser);
router.post('/signup', registerUser);

export default router;
