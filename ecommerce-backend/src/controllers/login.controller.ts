
import { Request, Response } from "express";
import { loginService } from "../services/login.service.js";
import { loginSchema } from "../schemas/login.schema.js";

export const loginController = async (req: Request, res: Response) => {

    try {

        const data = loginSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const login = await loginService(data.data.email,data.data.contrasena);

        if (login?.error) {
            return res.status(401).json(login);
        }

        return res.status(200).json(login);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al hacer login"
        });
    }
};