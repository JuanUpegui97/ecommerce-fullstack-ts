import { Request, Response } from "express";
import { crearUsuarioService, obtenerUsuariosService } from "../services/user.service.js";
import { CrearUsuarioDTO } from "../dto/user.dto.js";

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

        const data: CrearUsuarioDTO = req.body;

        const crear = await crearUsuarioService(data);

        return res.status(200).json(crear);


    } catch (error) {

         return res.status(500).json({
            mensaje: "Error al crear el usuario"
        });

    }
}