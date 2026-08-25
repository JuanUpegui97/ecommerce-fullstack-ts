import { z } from "zod";

export const crearVarianteImagenSchema = z.object({
    url: z.string().url()
});