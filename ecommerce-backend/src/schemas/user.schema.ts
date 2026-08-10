import { z } from "zod";

export const crearUsuarioSchema = z.object({
    nombre: z.string().min(2),
    apellido: z.string().min(2),
    correo: z.string().email(),
    celular: z.string().min(7),
    contrasena: z.string().min(8),
    cedula: z.string().min(5)
});