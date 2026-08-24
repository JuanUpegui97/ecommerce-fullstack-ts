import { Router } from "express";

import {
    crearCategoriaAtributoController,
    obtenerAtributosPorCategoriaController
} from "../controllers/categoria_atributo.controller.js";

const router = Router();

router.get(
    "/categoria/:categoriaId/atributos",
    obtenerAtributosPorCategoriaController
);

router.post(
    "/categoria/:categoriaId/atributos",
    crearCategoriaAtributoController
);

export default router;