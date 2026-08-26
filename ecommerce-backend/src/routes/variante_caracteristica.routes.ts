import { Router } from "express";

import { obtenerCaracteristicasPorVarianteController, crearVarianteCaracteristicaController } from "../controllers/variante_caracteristica.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/variantes/:varianteId/caracteristicas", roleMiddleware("cliente", "administrador"), obtenerCaracteristicasPorVarianteController);

router.post("/variantes/:varianteId/caracteristicas", roleMiddleware("administrador"), crearVarianteCaracteristicaController);

export default router;