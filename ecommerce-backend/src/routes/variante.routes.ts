import { Router } from "express";

import { obtenerVariantesPorProductoController, crearVarianteController } from "../controllers/variante.controller.js";

const router = Router();

router.get("/productos/:productoId/variantes", obtenerVariantesPorProductoController);

router.post("/productos/:productoId/variantes", crearVarianteController);

export default router;