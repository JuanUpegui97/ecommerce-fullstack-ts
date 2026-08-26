import { crearVarianteImagenController, obtenerImagenesPorVarianteController } from "../controllers/variante_imagen.controller.js";
import { roleMiddleware } from "../middlewares/role.middleware.js";
import { uploadImagen } from "../middlewares/upload.middleware.js";
import { Router } from "express";



const router = Router();


router.post("/variantes/:varianteId/imagenes", roleMiddleware("administrador"), uploadImagen, crearVarianteImagenController);

router.get("/variantes/:varianteId/imagenes", roleMiddleware("cliente", "administrador"), obtenerImagenesPorVarianteController);


export default router;