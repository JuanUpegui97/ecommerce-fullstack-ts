import { z } from "zod";

export const crearTipoProductoSchema = z.object({
    categoria_id: z.number().int().positive(),
    nombre: z.string().min(1).max(100)
});

