import { Router } from "express";

import {obtenerValoresPorAtributoController,crearCategoriaAtributoValorController} from "../controllers/categoria_atributo_valor.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/categoria-atributo/:categoriaAtributoId/valores",roleMiddleware("cliente", "administrador"),obtenerValoresPorAtributoController
);

router.post("/categoria-atributo/:categoriaAtributoId/valores",roleMiddleware("administrador"),crearCategoriaAtributoValorController
);

export default router;