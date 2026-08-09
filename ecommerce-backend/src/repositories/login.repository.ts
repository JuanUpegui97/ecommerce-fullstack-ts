import pool from "../config/database.js";
import bcrypt from "bcrypt";


export const login = async (email: string) => {

    try {

        const result = await pool
            .query(
                `SELECT  nombre, apellido,  rol, password 
                 FROM usuarios
                 WHERE email = $1`,
                [email]
            );

        return result.rows[0];


    } catch (error) {

        throw error;
    }
}