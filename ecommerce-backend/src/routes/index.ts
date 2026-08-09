import { Router } from "express";
import userRoutes from "./user.routes.js";
import loginRoutes from "./login.routes.js";



const router = Router();

router.use(userRoutes);
router.use(loginRoutes);

export default router;