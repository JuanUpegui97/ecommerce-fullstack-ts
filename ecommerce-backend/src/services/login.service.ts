import { login } from "../repositories/login.repository.js"
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";



export const loginService = async (email: string, contrasena: string) => {

    try {

        const usuario = await login(email);

        if (!usuario) {
            return {
                error: "Credenciales inválidas"
            };
        }

        const passwordValida = await bcrypt.compare(
            contrasena,
            usuario.password
        );

        if (passwordValida) {

            const token = jwt.sign(
                {
                    username: usuario.nombre,
                    role: usuario.rol
                },
                process.env.JWT_SECRET || "tu_clave_secreta_jwt",
                {
                    expiresIn: "8h"
                }
            );

            return {
                usuario: {
                    username: usuario.nombre,
                    rolename: usuario.rol
                },
                token
            };
        }

        return {
            error: "Credenciales inválidas"
        };

    } catch (error) {

        throw error;
    }

}