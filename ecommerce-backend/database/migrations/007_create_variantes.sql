CREATE TABLE variantes (
    id SERIAL PRIMARY KEY,
    producto_id INTEGER NOT NULL,
    sku VARCHAR(50) UNIQUE NOT NULL,
    stock INTEGER NOT NULL,
    precio DECIMAL(12, 2) NOT NULL,

    FOREIGN KEY (producto_id)
        REFERENCES productos(id)
);