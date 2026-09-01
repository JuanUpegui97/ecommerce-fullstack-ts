import { z } from "zod";

export const crearTipoProductoAtributoValorSchema = z.object({
    valor: z.string().min(1)
});