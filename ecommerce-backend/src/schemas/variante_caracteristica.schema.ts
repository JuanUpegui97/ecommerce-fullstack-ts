import { z } from "zod";

export const crearVarianteCaracteristicaSchema = z.object({
    categoria_atributo_valor_id: z.number().int().positive()
});