import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            error: "Token requerido"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof decoded === "string") {
            return res.status(401).json({
                error: "Token inválido"
            });
        }

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            error: "Token inválido o expirado"
        });
    }
};