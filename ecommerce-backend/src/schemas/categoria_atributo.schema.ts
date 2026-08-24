import { z } from "zod";

export const crearCategoriaAtributoSchema = z.object({
    nombre: z.string().min(2)
});