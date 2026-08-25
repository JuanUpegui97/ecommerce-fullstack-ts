import { crearVarianteImagenController, obtenerImagenesPorVarianteController } from "../controllers/variante_imagen.controller.js";
import { uploadImagen } from "../middlewares/upload.middleware.js";
import { Router } from "express";



const router = Router();


router.post("/variantes/:varianteId/imagenes", uploadImagen, crearVarianteImagenController);

router.get("/variantes/:varianteId/imagenes", obtenerImagenesPorVarianteController);


export default router;