import { Request, Response } from "express";

import { obtenerProductosService, crearProductoService } from "../services/producto.service.js";

import { crearProductoSchema } from "../schemas/producto.schema.js";

export const obtenerProductosController = async (req: Request, res: Response
) => {
    try {
        const productos = await obtenerProductosService();

        return res.status(200).json(productos);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener los productos"
        });
    }
};

export const crearProductoController = async (req: Request, res: Response
) => {
    try {
        const data = crearProductoSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const producto = await crearProductoService(data.data);

        return res.status(201).json(producto);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear el producto"
        });
    }
};