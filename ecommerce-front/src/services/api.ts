import axios from 'axios';


const API_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL:API_URL,
    headers:{
        'Content-Type': 'application/json'
    }

});

// Servicio para autenticar

export const authService = {
 
    login: (credenciales: {email: string, password: string}) => api.post('/usuarios/login', credenciales)
};


// Sercicio para los prodcutos 

export const gestionProductos = {

    getAll: () => api.get('/productos')
};


export default api;

