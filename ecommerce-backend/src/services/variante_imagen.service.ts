import { obtenerImagenesPorVariante, crearVarianteImagen } from "../repositories/variante_imagenes.repository.js";

import { CrearVarianteImagenDTO } from "../dto/variante_imagen.dto.js";

import cloudinary from "../config/cloudinary.js";


export const obtenerImagenesPorVarianteService = async (varianteId: number) => {
    return await obtenerImagenesPorVariante(varianteId);
};

export const crearVarianteImagenService = async (varianteId: number, data: CrearVarianteImagenDTO
) => {
    return await crearVarianteImagen(varianteId, data);
};


export const subirImagenCloudinary = async (archivo: Express.Multer.File) => {
    const resultado = await new Promise<any>((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "ecommerce/variantes"
            },
            (error, resultado) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(resultado);
            }
        );

        stream.end(archivo.buffer);
    });

    return resultado.secure_url;
};