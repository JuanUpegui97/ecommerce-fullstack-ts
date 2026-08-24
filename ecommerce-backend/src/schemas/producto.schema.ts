import { z } from "zod";

export const crearProductoSchema = z.object({
    categoria_id: z.number().int().positive(),
    nombre: z.string().min(2),
    descripcion: z.string().optional()
});