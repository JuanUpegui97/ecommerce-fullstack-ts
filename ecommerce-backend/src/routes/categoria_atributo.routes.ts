import { Router } from "express";

import {
    crearCategoriaAtributoController,
    obtenerAtributosPorCategoriaController
} from "../controllers/categoria_atributo.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get(
    "/categoria/:categoriaId/atributos", roleMiddleware("cliente", "administrador"), obtenerAtributosPorCategoriaController);

router.post(
    "/categoria/:categoriaId/atributos", roleMiddleware("administrador"), crearCategoriaAtributoController);

export default router;