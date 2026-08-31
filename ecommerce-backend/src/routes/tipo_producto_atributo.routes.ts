import { Router } from "express";

import {
    crearTipoProductoAtributoController,
    obtenerAtributosPorTipoProductoController
} from "../controllers/tipo_producto_atributo.controller.js";

import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get(
    "/tipo-producto/:tipoProductoId/atributos",
    roleMiddleware("cliente", "administrador"),
    obtenerAtributosPorTipoProductoController
);

router.post(
    "/tipo-producto/:tipoProductoId/atributos",
    roleMiddleware("administrador"),
    crearTipoProductoAtributoController
);

export default router;