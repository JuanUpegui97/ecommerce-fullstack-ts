CREATE TABLE variante_caracteristicas (
    id SERIAL PRIMARY KEY,
    variante_id INTEGER NOT NULL,
    categoria_atributo_valor_id INTEGER NOT NULL,

    FOREIGN KEY (variante_id)
        REFERENCES variantes(id),

    FOREIGN KEY (categoria_atributo_valor_id)
        REFERENCES categoria_atributo_valores(id)
);