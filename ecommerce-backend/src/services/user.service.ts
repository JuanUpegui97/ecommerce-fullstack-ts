import { CrearUsuarioDTO } from "../dto/user.dto.js";
import { crearUsuario, obtenerUsuarios } from "../repositories/user.repository.js";
import bcrypt from "bcrypt";


export const obtenerUsuariosService = async () => {

    const usuarios = await obtenerUsuarios();

    return usuarios;
};


export const crearUsuarioService = async (data: CrearUsuarioDTO) => {

    try {

        const passwordHash = await bcrypt.hash(data.contrasena, 10);

        const crear = await crearUsuario({
            ...data,
            contrasena: passwordHash
        });

        return crear;

    } catch (error) {

        throw error;
    }
};