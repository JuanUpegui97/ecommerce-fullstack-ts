import { crearCategoriaDto } from "../dto/categoria.dto.js";
import { crearCategoria, obtenerCategorias } from "../repositories/categorias.repository.js"

export const obtenerCategoriasService = async () => {

    const categorias = await obtenerCategorias();

    return categorias;
};


export const crearCategoriaService = async (data: crearCategoriaDto) => {
    
    try {

        const crear = await crearCategoria(data);

        return crear;

    } catch (error) {

        throw error;
        
    }
};

