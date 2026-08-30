import { Router } from "express";

import {
    obtenerTiposPorCategoriaController,
    crearTipoProductoController,
    obtenerTiposProductosController
} from "../controllers/tipo_productos.controller.js";

import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/tipos-producto", roleMiddleware("cliente", "administrador"), obtenerTiposProductosController);

router.get("/categoria/:categoriaId/tipos-producto", roleMiddleware("cliente", "administrador"), obtenerTiposPorCategoriaController);

router.post("/tipos-producto", roleMiddleware("administrador"), crearTipoProductoController);

export default router;