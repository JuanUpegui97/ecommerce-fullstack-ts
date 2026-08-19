import axios from 'axios';
import type { LoginCredentials, LoginResponse } from '../types/auth.types';


const API_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type': 'application/json'
    }

});

// Servicio para autenticar


export const authService = {

    login: (credenciales: LoginCredentials) => api.post<LoginResponse>("/login", credenciales)

};


// Sercicio para los prodcutos 

export const gestionProductos = {

    getAll: () => api.get('/productos')
};


export default api;

