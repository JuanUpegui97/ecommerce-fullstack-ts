import { Modal, Form, Button } from "react-bootstrap";
import React, { useState } from "react";

import { gestionTipoProductoAtributos } from "../../../services/api";

interface CrearAtributoModalProps {
    show: boolean;
    onClose: () => void;
    onCreated: () => void;
    tipoProductoId: number;
}

const CrearAtributoModal = ({
    show,
    onClose,
    onCreated,
    tipoProductoId
}: CrearAtributoModalProps) => {

    const [nombre, setNombre] = useState("");

    const crearAtributo = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const atributo = {
                nombre
            };

            await gestionTipoProductoAtributos.create(
                tipoProductoId,
                atributo
            );

            onCreated();
            limpiarFormulario();
            onClose();

        } catch (error) {
            console.error("Error al crear atributo:", error);
        }
    };

    const limpiarFormulario = () => {
        setNombre("");
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
                    Nuevo atributo
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={crearAtributo}>
                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Nombre del atributo
                        </Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Ej: Color"
                            value={nombre}
                            onChange={(e) =>
                                setNombre(e.target.value)
                            }
                        />
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
                        Crear atributo
                    </Button>

                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default CrearAtributoModal;