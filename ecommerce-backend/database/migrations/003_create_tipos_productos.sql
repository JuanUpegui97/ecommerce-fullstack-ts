CREATE TABLE tipos_productos (
    id SERIAL PRIMARY KEY,
    categoria_id INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,

    FOREIGN KEY (categoria_id)
        REFERENCES categorias(id),

    UNIQUE (categoria_id, nombre)
);