CREATE TABLE categoria_atributo_valores (
    id SERIAL PRIMARY KEY,
    categoria_atributo_id INTEGER NOT NULL,
    valor VARCHAR(100) NOT NULL,

    FOREIGN KEY (categoria_atributo_id)
        REFERENCES categoria_atributos(id)
);