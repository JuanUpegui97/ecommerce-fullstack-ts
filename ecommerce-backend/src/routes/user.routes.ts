import { Router } from "express";
import { crearUsuarioController, obtenerUsuariosController } from "../controllers/user.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/usuarios",roleMiddleware("administrador"), obtenerUsuariosController);
router.post("/usuarios",roleMiddleware("administrador"), crearUsuarioController);

export default router;