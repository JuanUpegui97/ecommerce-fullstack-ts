import { z } from "zod";

export const crearCategoriaAtributoValorSchema = z.object({
    valor: z.string().min(1)
});