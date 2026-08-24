import { z } from "zod"; 


export const crearCatergoriaSchema = z.object({

    nombre: z.string().min(2),
    prefijo_sku: z.string().min(2)

});