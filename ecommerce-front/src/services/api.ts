import axios from 'axios';
import type { LoginCredentials, LoginResponse } from '../types/auth.types';
import type { Categoria, CategoriaCrear } from './categoria';



const API_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }

});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



// Servicio para autenticar


export const authService = {

    login: (credenciales: LoginCredentials) => api.post<LoginResponse>("/login", credenciales)

};


// Sercicio para los prodcutos 

export const gestionProductos = {

    getAll: () => api.get('/productos')
};

// Sercicio para Categorias

export const gestionCategorias = {

    getAll: () => api.get<Categoria[]>("/categoria"),

    create: (data: CategoriaCrear) => api.post("/categoria" , data)

}


export default api;

