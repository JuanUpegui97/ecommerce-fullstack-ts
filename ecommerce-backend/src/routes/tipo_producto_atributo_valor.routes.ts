import { Router } from "express";

import {
    obtenerValoresPorAtributoController,
    crearTipoProductoAtributoValorController
} from "../controllers/tipo_producto_atributo_valor.controller.js";

import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get(
    "/tipo-producto-atributo/:tipoProductoAtributoId/valores",
    roleMiddleware("cliente", "administrador"),
    obtenerValoresPorAtributoController
);

router.post(
    "/tipo-producto-atributo/:tipoProductoAtributoId/valores",
    roleMiddleware("administrador"),
    crearTipoProductoAtributoValorController
);

export default router;