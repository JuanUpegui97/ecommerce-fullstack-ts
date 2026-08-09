import { Router } from "express";
import { crearUsuarioController, obtenerUsuariosController } from "../controllers/user.controller.js";

const router = Router();

router.get("/usuarios", obtenerUsuariosController);
router.post("/usuarios", crearUsuarioController);

export default router;