import { Modal, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { gestionTiposProductos } from "../../../services/api";
import type { Categoria } from "../../../services/categoria";


interface CrearTipoProductoModalProps {
    show: boolean;
    onClose: () => void;
    onCreated: () => void;
    categorias: Categoria[];
}

const CrearTipoProductoModal = ({ show, onClose, onCreated, categorias }: CrearTipoProductoModalProps) => {

    const [nombre, setNombre] = useState("");
    const [categoriaId, setCategoriaId] = useState<number>(0);

    const crearTipoProducto = async (e: React.FormEvent) => {
        e.preventDefault();

        try {

            const tipoProducto = {
                categoria_id: categoriaId,
                nombre
            }

            await gestionTiposProductos.create(tipoProducto);


            onCreated();
            limpiarFormulario();
            onClose();

        } catch (error) {

        }
    }

    const limpiarFormulario = () => {
        setNombre("");
        setCategoriaId(0);
    };


    return (
        <Modal
            show={show}
            onHide={onClose}
            centered
            backdrop="static"
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Nuevo tipo de producto
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={crearTipoProducto}>

                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Nombre Tipo Prodcuto
                        </Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Ej: Ropa"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Categoria
                        </Form.Label>
                        <Form.Select
                            value={categoriaId}
                            onChange={(e) => setCategoriaId(Number(e.target.value))}
                        >
                            <option value="">Seleccione una categoría</option>

                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer>

                    <Button
                        variant="secondary"
                        type="button"
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Crear tipo de producto
                    </Button>

                </Modal.Footer>

            </Form>
        </Modal>
    );

};

export default CrearTipoProductoModal;