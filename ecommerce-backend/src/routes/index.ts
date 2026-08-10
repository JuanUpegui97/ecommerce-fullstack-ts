import { Router } from "express";
import userRoutes from "./user.routes.js";
import loginRoutes from "./login.routes.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";



const router = Router();


router.use(loginRoutes);

router.use(authMiddleware);

router.use(userRoutes);

export default router;