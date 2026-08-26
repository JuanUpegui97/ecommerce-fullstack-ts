import { Router } from "express";
import { crearCategoriaController, obtenerCategoriaController } from "../controllers/categoria.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";


const router = Router();

router.get("/categoria", obtenerCategoriaController);
router.post("/categoria",roleMiddleware("administrador"), crearCategoriaController);

export default router;