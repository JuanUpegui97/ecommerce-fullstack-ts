import { Request, Response } from "express";
import { crearUsuarioService, obtenerUsuariosService } from "../services/user.service.js";
import { CrearUsuarioDTO } from "../dto/user.dto.js";
import { crearUsuarioSchema } from "../schemas/user.schema.js";

export const obtenerUsuariosController = async (
    req: Request,
    res: Response
) => {

    try {

        const usuarios = await obtenerUsuariosService();

        return res.status(200).json(usuarios);

    } catch (error) {

        return res.status(500).json({
            mensaje: "Error al obtener los usuarios"
        });

    }
};

export const crearUsuarioController = async (
    req: Request,
    res: Response
) => {
    try {
        
        const data = crearUsuarioSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const crear = await crearUsuarioService(data.data);

        return res.status(200).json(crear);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear el usuario"
        });
    }
};