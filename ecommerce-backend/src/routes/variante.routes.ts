import { Router } from "express";

import { obtenerVariantesPorProductoController, crearVarianteController } from "../controllers/variante.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/productos/:productoId/variantes", roleMiddleware("cliente", "administrador"), obtenerVariantesPorProductoController);

router.post("/productos/:productoId/variantes", roleMiddleware("administrador"), crearVarianteController);

export default router;