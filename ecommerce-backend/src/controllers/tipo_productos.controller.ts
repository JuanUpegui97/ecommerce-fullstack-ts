import { Request, Response } from "express";

import {
    obtenerTiposPorCategoriaService,
    crearTipoProductoService
} from "../services/tipo_productos.service.js";

import { crearTipoProductoSchema } from "../schemas/tipo_producto.schema.js";


export const obtenerTiposPorCategoriaController = async (req: Request, res: Response) => {

    try {

        const categoriaId = Number(req.params.categoriaId);

        const tipos = await obtenerTiposPorCategoriaService(categoriaId);

        return res.status(200).json(tipos);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            mensaje: "Error al obtener los tipos de producto"
        });

    }

};


export const crearTipoProductoController = async (req: Request, res: Response) => {

    try {

        const data = crearTipoProductoSchema.safeParse(req.body);

        if (!data.success) {

            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });

        }

        const tipoProducto = await crearTipoProductoService(data.data);

        return res.status(201).json(tipoProducto);

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            mensaje: "Error al crear el tipo de producto"
        });

    }

};