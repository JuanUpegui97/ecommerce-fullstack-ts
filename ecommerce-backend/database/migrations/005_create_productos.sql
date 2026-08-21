CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    categoria_id INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,

    FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
);