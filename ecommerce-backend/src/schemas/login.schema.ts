import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    contrasena: z.string().min(8)
});