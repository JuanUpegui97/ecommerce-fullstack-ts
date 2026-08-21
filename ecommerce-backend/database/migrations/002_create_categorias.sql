CREATE TABLE categorias (

    id SERIAL PRIMARY KEY,

    nombre VARCHAR(255) UNIQUE NOT NULL,

    prefijo_sku VARCHAR(3) UNIQUE NOT NULL
    
);