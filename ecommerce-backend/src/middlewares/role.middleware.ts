import { Request, Response, NextFunction } from "express";

export const roleMiddleware = (...rolesPermitidos: string[]) => {
    
    return (req: Request, res: Response, next: NextFunction) => {

        const usuario = req.user;

        if (!usuario) {
            return res.status(401).json({
                error: "Usuario no autenticado"
            });
        }

        if (!rolesPermitidos.includes(usuario.role)) {
            return res.status(403).json({
                error: "No tienes permisos para realizar esta acción"
            });
        }

        next();
    };
};