import { crearCatergoriaSchema } from "../schemas/categoria.schema.js";
import { crearCategoriaService, obtenerCategoriasService } from "../services/categoria.service.js"
import { Request, Response } from "express";



export const obtenerCategoriaController = async (req: Request, res: Response) => {

    try {

        const categorias = await obtenerCategoriasService();

        return res.status(200).json(categorias);

    } catch (error) {

        return res.status(500).json({

            mensaje: "Error al obtener las categorías"

        });

    }
}

export const crearCategoriaController = async (req: Request, res:Response) => {

    try {

        const data = crearCatergoriaSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const crear = await crearCategoriaService(data.data);

        return res.status(200).json(crear);

        
    } catch (error) {

        return res.status(500).json({
            mensaje: "Error al crear la categoría"
        });
        
    }
}