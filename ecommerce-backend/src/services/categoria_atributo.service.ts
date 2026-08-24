import { crearCategoriaAtributoDto } from "../dto/categoria_atributo.dto.js";
import { crearCategoriaAtributo, obtenerAtributosPorCategoria } from "../repositories/categoria_atributos.repository.js";

export const obtenerAtributosPorCategoriaService = async ( categoriaId: number) => {
    return await obtenerAtributosPorCategoria(categoriaId);
};

export const crearCategoriaAtributoService = async (categoriaId: number,data: crearCategoriaAtributoDto
) => {
    return await crearCategoriaAtributo(categoriaId, data);
};