import { obtenerValoresPorAtributo, crearCategoriaAtributoValor} from "../repositories/categoria_atributo_valores.repository.js";

import { CrearCategoriaAtributoValorDTO } from "../dto/categoria_atributo_valor.dto.js";

export const obtenerValoresPorAtributoService = async ( categoriaAtributoId: number) => {
    return await obtenerValoresPorAtributo(categoriaAtributoId);
};

export const crearCategoriaAtributoValorService = async ( categoriaAtributoId: number, data: CrearCategoriaAtributoValorDTO) => {
    return await crearCategoriaAtributoValor(
        categoriaAtributoId,
        data
    );
};