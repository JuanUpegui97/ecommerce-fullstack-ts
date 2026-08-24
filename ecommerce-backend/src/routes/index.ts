import { Router } from "express";
import userRoutes from "./user.routes.js";
import loginRoutes from "./login.routes.js";
import categoriaRoutes from "./categoria.routes.js";
import categoriaAtributoRoutes from "./categoria_atributo.routes.js";
import categoriaAtributoValorRoutes from "./categoria_atributo_valor.routes.js";
import productoRoutes from "./producto.routes.js";
import varianteRoutes from "./variante.routes.js";
import varianteCaracteristicaRoutes from "./variante_caracteristica.routes.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";



const router = Router();


router.use(loginRoutes);

router.use(authMiddleware);

router.use(userRoutes);

router.use(categoriaRoutes);

router.use(categoriaAtributoRoutes);

router.use(categoriaAtributoValorRoutes);

router.use(productoRoutes);

router.use(varianteRoutes);

router.use(varianteCaracteristicaRoutes);

export default router;