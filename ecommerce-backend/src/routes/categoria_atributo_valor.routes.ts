import { Router } from "express";

import {obtenerValoresPorAtributoController,crearCategoriaAtributoValorController} from "../controllers/categoria_atributo_valor.controller.js";

const router = Router();

router.get("/categoria-atributo/:categoriaAtributoId/valores",obtenerValoresPorAtributoController
);

router.post("/categoria-atributo/:categoriaAtributoId/valores",crearCategoriaAtributoValorController
);

export default router;