import express from 'express';
import viewRouter from "./views/viewRouter.js";
import authRouter from "./auth/authRouter.js";

const router = express.Router();

router.use('/',viewRouter)
router.use('/auth',authRouter);

export  default router;