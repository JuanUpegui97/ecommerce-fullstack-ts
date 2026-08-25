import { Request, Response } from "express";

import { obtenerImagenesPorVarianteService, crearVarianteImagenService, subirImagenCloudinary } from "../services/variante_imagen.service.js";

import { crearVarianteImagenSchema } from "../schemas/variante_imagen.schema.js";

export const obtenerImagenesPorVarianteController = async (req: Request, res: Response) => {
    try {
        const varianteId = Number(req.params.varianteId);

        const imagenes = await obtenerImagenesPorVarianteService(varianteId);

        return res.status(200).json(imagenes);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener las imágenes"
        });
    }
};

export const crearVarianteImagenController = async (req: Request, res: Response) => {
    try {
        const varianteId = Number(req.params.varianteId);

        const archivo = req.file;

        if (!archivo) {
            return res.status(400).json({
                mensaje: "La imagen es obligatoria"
            });
        }

        console.log("Imagen recibida:", archivo.originalname);

        const imagenUrl = await subirImagenCloudinary(archivo);

        const data = crearVarianteImagenSchema.safeParse({
            url: imagenUrl
        });

        if (!data.success) {
            return res.status(400).json({
                mensaje: "URL inválida",
                errores: data.error.flatten()
            });
        }

        const varianteImagen = await crearVarianteImagenService(varianteId, data.data);

        return res.status(201).json(varianteImagen);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            mensaje: "Error al crear imagen con variante"
        });
    }
};