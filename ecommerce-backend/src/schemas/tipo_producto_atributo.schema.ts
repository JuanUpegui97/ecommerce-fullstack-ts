import { z } from "zod";

export const crearTipoProductoAtributoSchema = z.object({
    nombre: z.string().min(1, "El nombre es obligatorio")
});