import React, { useEffect, useState } from 'react';
import type { TiposProductos } from '../../services/tipos_productos';
import { gestionCategorias, gestionTiposProductos } from '../../services/api';
import { Button, Card, Table } from 'react-bootstrap';
import CrearTipoProductoModal from '../../components/admin/categorias/CrearTipoProductoModal';
import type { Categoria } from '../../services/categoria';


const GestionTiposProductosPage = () => {

    const [tiposProductos, setTiposProductos] = useState<TiposProductos[]>([]);
    const [loading, setLoading] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);



    const cargarTiposProductos = async () => {

        try {

            setLoading(true);

            const [respTipos, respCategorias] = await Promise.all([
                gestionTiposProductos.getAll(),
                gestionCategorias.getAll()
            ]);
    
            setTiposProductos(respTipos.data);
            setCategorias(respCategorias.data);

        } catch (error) {
            console.error('Error al cargar consultorios:', error);

        } finally {
            setLoading(false);
        }
    }

    const renderTiposProductos = () => {
        return (
            <Card>
                <Card.Body>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h4 className="mb-1">Tipos de producto</h4>

                            <p className="text-muted mb-0">
                                Administra los tipos de producto de tu catálogo
                            </p>
                        </div>

                        <Button
                            variant="primary"
                            onClick={() => setMostrarModal(true)}
                        >
                            + Crear tipo de producto
                        </Button>
                    </div>

                    {tiposProductos.length === 0 ? (

                        <div className="text-center py-5">
                            <p className="text-muted mb-3">
                                No hay tipos de producto creados todavía.
                            </p>
                        </div>

                    ) : (

                        <Table striped hover responsive>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Categoría</th>
                                    <th className="text-end">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {tiposProductos.map((tipoProducto) => (

                                    <tr key={tipoProducto.id}>

                                        <td>
                                            {tipoProducto.nombre}
                                        </td>

                                        <td>
                                            {tipoProducto.categoria_nombre}
                                        </td>

                                        <td className="text-end">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                            >
                                                ⋮
                                            </Button>
                                        </td>

                                    </tr>

                                ))}
                            </tbody>
                        </Table>

                    )}

                </Card.Body>
            </Card>
        );
    };

    useEffect(() => {

        cargarTiposProductos();

    }, []);

    return (

        <>
            <div className="container py-4">

                {renderTiposProductos()}

                <CrearTipoProductoModal
                    show={mostrarModal}
                    onClose={() => setMostrarModal(false)}
                    onCreated={cargarTiposProductos}
                    categorias={categorias}
                />

            </div>
        </>

    );
};

export default GestionTiposProductosPage;