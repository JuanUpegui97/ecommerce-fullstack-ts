import React, { useEffect, useState } from 'react';
import { Button, Card, Table, Form } from 'react-bootstrap';
import type { TipoProductoAtributo } from "../../services/tipo_producto_atributo";
import type { TiposProductos } from '../../services/tipos_productos';
import { gestionTipoProductoAtributos, gestionTipoProductoAtributoValores, gestionTiposProductos } from '../../services/api';
import CrearAtributoModal from '../../components/admin/categorias/CrearAtributoModal';
import type { TipoProductoAtributoValor } from '../../services/tipo_producto_atributo_valor';


const GestionProductosAtributosPage = () => {

    const [tiposProductos, setTiposProductos] = useState<TiposProductos[]>([]);
    const [tipoProductoSeleccionado, setTipoProductoSeleccionado] = useState<number>(0);
    const [atributos, setAtributos] = useState<TipoProductoAtributo[]>([]);
    const [atributoSeleccionado, setAtributoSeleccionado] = useState<number | null>(null);
    const [valores, setValores] = useState<TipoProductoAtributoValor[]>([]);
    const [loading, setLoading] = useState(false);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalValor, setMostrarModalValor] = useState(false);



    const cargarData = async () => {

        try {

            setLoading(true);

            const tipos = await gestionTiposProductos.getAll();

            setTiposProductos(tipos.data);

        } catch (error) {
            console.error('Error al cargar consultorios:', error);

        } finally {
            setLoading(false);
        }

    }

    const cargarAtributos = async (tipoProductoId: number) => {
        try {
            const respuesta = await gestionTipoProductoAtributos.getAll(tipoProductoId);
            setAtributos(respuesta.data);
        } catch (error) {
            console.error("Error al cargar atributos:", error);
        }
    };

    const cargarAtributosValores = async (tipoProductoAtributoId: number) => {
        try {
            const respuesta = await gestionTipoProductoAtributoValores.getAll(tipoProductoAtributoId);
            setValores(respuesta.data);
        } catch (error) {
            console.error("Error al cargar valores:", error);
        }
    };

    const renderTiposProductos = () => {
        return (
            <Card className="mb-4">
                <Card.Body>
                    <Form.Group>
                        <Form.Label>
                            Tipo de producto
                        </Form.Label>

                        <Form.Select
                            value={tipoProductoSeleccionado}
                            onChange={(e) => {
                                const id = Number(e.target.value);

                                setTipoProductoSeleccionado(id);

                                if (id !== 0) {
                                    cargarAtributos(id);
                                } else {
                                    setAtributos([]);
                                }
                            }}
                        >
                            <option value={0}>
                                Seleccione un tipo de producto
                            </option>

                            {tiposProductos.map((tipoProducto) => (
                                <option
                                    key={tipoProducto.id}
                                    value={tipoProducto.id}
                                >
                                    {tipoProducto.nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Card.Body>
            </Card>
        );
    };

    const renderProductoAtributos = () => {
        return (
            <Card>
                <Card.Body>

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h5 className="mb-1">
                                Atributos
                            </h5>

                            <p className="text-muted mb-0">
                                Atributos configurados para el tipo de producto
                            </p>
                        </div>

                        <Button
                            variant="primary"
                            onClick={() => setMostrarModal(true)}
                            disabled={tipoProductoSeleccionado === 0}
                        >
                            + Crear atributo
                        </Button>
                    </div>

                    {tipoProductoSeleccionado === 0 ? (
                        <p className="text-muted">
                            Selecciona un tipo de producto para ver sus atributos.
                        </p>
                    ) : atributos.length === 0 ? (
                        <p className="text-muted">
                            Este tipo de producto no tiene atributos configurados.
                        </p>
                    ) : (
                        <Table striped hover responsive>
                            <thead>
                                <tr>
                                    <th>Atributo</th>
                                    <th className="text-end">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {atributos.map((atributo) => (
                                    <React.Fragment key={atributo.id}>

                                        <tr>
                                            <td
                                                onClick={() => {
                                                    setAtributoSeleccionado(atributo.id);
                                                    cargarAtributosValores(atributo.id);
                                                }}
                                            >
                                                {atributo.nombre}
                                            </td>

                                            <td className="text-end">
                                                <Button
                                                    variant="primary"
                                                    onClick={() => {
                                                        setAtributoSeleccionado(atributo.id);
                                                        setMostrarModalValor(true);
                                                    }}
                                                >
                                                    + Crear valor
                                                </Button>
                                            </td>
                                        </tr>

                                        {atributoSeleccionado === atributo.id && (
                                            <tr>
                                                <td colSpan={2}>
                                                    Aquí mostraremos los valores
                                                </td>
                                            </tr>
                                        )}

                                    </React.Fragment>
                                ))}
                            </tbody>
                        </Table>
                    )}

                </Card.Body>
            </Card>
        );
    };

    useEffect(() => {

        cargarData();

    }, []);


    return (
        <>
            <div className="container py-4">
                {renderTiposProductos()}
                {renderProductoAtributos()}

                <CrearAtributoModal
                    show={mostrarModal}
                    onClose={() => setMostrarModal(false)}
                    onCreated={() => cargarAtributos(tipoProductoSeleccionado)}
                    tipoProductoId={tipoProductoSeleccionado}
                />
            </div>
        </>
    );
};

export default GestionProductosAtributosPage;