CREATE TABLE tipo_producto_atributo_valores (
    id SERIAL PRIMARY KEY,
    tipo_producto_atributo_id INTEGER NOT NULL,
    valor VARCHAR(100) NOT NULL,

    FOREIGN KEY (tipo_producto_atributo_id)
        REFERENCES tipo_producto_atributos(id)
);