CREATE TABLE variante_caracteristicas (
    id SERIAL PRIMARY KEY,
    variante_id INTEGER NOT NULL,
    tipo_producto_atributo_valor_id INTEGER NOT NULL,

    FOREIGN KEY (variante_id)
        REFERENCES variantes(id),

    FOREIGN KEY (tipo_producto_atributo_valor_id)
        REFERENCES tipo_producto_atributo_valores(id)
);