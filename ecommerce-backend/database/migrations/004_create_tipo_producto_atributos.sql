CREATE TABLE tipo_producto_atributos (
    id SERIAL PRIMARY KEY,
    tipo_producto_id INTEGER NOT NULL,
    nombre VARCHAR(100) NOT NULL,

    FOREIGN KEY (tipo_producto_id)
        REFERENCES tipos_productos(id)
);