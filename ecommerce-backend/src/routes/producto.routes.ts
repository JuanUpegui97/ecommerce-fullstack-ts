import { Router } from "express";

import { obtenerProductosController, crearProductoController } from "../controllers/producto.controller.js";

const router = Router();

router.get("/productos", obtenerProductosController);

router.post("/productos", crearProductoController);

export default router;