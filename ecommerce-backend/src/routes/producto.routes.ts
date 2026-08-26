import { Router } from "express";

import { obtenerProductosController, crearProductoController } from "../controllers/producto.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/productos",roleMiddleware("cliente","administrador"), obtenerProductosController);

router.post("/productos", roleMiddleware("administrador"), crearProductoController);

export default router;