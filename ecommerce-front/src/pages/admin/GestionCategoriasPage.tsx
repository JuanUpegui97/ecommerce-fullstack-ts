import React, { useEffect, useState } from 'react';
import { gestionCategorias } from '../../services/api';
import type { Categoria } from '../../services/categoria';
import { Button, Card, Modal, Table } from 'react-bootstrap';
import CrearCategoriaModal from '../../components/admin/categorias/CrearCategoriaModal';


const GestionCategoriasPage = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {

        cargarCategorias();
    }, []);

    const cargarCategorias = async () => {

        try {

            setLoading(true);

            const categorias = await gestionCategorias.getAll();

            setCategorias(categorias.data);

        } catch (error) {
            console.error('Error al cargar consultorios:', error);

        } finally {
            setLoading(false);
        }
    }

    const renderCategorias = () => {
        return (
            <Card>
                <Card.Body>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h4 className="mb-1">Categorías</h4>

                            <p className="text-muted mb-0">
                                Administra las categorías de tu catálogo
                            </p>
                        </div>

                        <Button
                            variant="primary"
                            onClick={() => setMostrarModal(true)}
                        >
                            + Crear categoría
                        </Button>
                    </div>

                    {categorias.length === 0 ? (
                        <div className="text-center py-5">
                            <p className="text-muted mb-3">
                                No hay categorías creadas todavía.
                            </p>

                            <Button
                                variant="primary"
                                onClick={() => setMostrarModal(true)}
                            >
                                + Crear categoría
                            </Button>
                        </div>
                    ) : (
                        <Table striped hover responsive>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Prefijo SKU</th>
                                    <th className="text-end">Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categorias.map((categoria) => (
                                    <tr key={categoria.id}>
                                        <td>{categoria.nombre}</td>

                                        <td>{categoria.prefijo_sku}</td>

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
    return (

        <>
            <div className="container py-4">

                {renderCategorias()}

                <CrearCategoriaModal
                    show={mostrarModal}
                    onClose={() => setMostrarModal(false)}
                    onCreated={cargarCategorias}
                />

            </div>
        </>

    );
};


export default GestionCategoriasPage;

