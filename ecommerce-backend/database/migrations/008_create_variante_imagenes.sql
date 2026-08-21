CREATE TABLE variante_imagenes (
    id SERIAL PRIMARY KEY,
    variante_id INTEGER NOT NULL,
    url TEXT NOT NULL,

    FOREIGN KEY (variante_id)
        REFERENCES variantes(id)
);