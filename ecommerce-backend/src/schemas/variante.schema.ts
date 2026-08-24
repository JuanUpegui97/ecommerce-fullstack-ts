import { z } from "zod";

export const crearVarianteSchema = z.object({
    sku: z.string().min(1),
    stock: z.number().int().min(0),
    precio: z.number().positive()
});