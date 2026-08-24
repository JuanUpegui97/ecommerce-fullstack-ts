import { Router } from "express";
import { crearCategoriaController, obtenerCategoriaController } from "../controllers/categoria.controller.js";


const router = Router();

router.get("/categoria", obtenerCategoriaController);
router.post("/categoria", crearCategoriaController);

export default router;