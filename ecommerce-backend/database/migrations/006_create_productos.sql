CREATE TABLE productos (
    id SERIAL PRIMARY KEY,
    tipo_producto_id INTEGER NOT NULL,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,

    FOREIGN KEY (tipo_producto_id)
        REFERENCES tipos_productos(id)
);