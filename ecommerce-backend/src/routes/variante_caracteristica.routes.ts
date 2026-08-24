import { Router } from "express";

import { obtenerCaracteristicasPorVarianteController, crearVarianteCaracteristicaController } from "../controllers/variante_caracteristica.controller.js";

const router = Router();

router.get("/variantes/:varianteId/caracteristicas", obtenerCaracteristicasPorVarianteController);

router.post("/variantes/:varianteId/caracteristicas", crearVarianteCaracteristicaController);

export default router;