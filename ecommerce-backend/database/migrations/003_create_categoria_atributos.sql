CREATE TABLE categoria_atributos (
    id SERIAL PRIMARY KEY,
    categoria_id INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,

    FOREIGN KEY (categoria_id)
        REFERENCES categorias(id)
);