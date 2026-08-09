
import { Request, Response } from "express";
import { loginService } from "../services/login.service.js";

export const loginController = async (req: Request, res: Response) => {

    try {

        const { email, contrasena } = req.body


        if (!email || !contrasena) {
            return res.status(400).json({
                mensaje: "Datos inválidos"
            });
        }

        const login = await loginService(email, contrasena)

        if (login?.error) {
            return res.status(401).json(login);
        }

        return res.status(200).json(login);


    } catch (error) {

        return res.status(500).json({
            mensaje: "Error al hacer login"
        });

    }
}