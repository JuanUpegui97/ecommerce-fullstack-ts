import { Modal, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { gestionCategorias } from "../../../services/api";

interface CrearCategoriaModalProps {
    show: boolean;
    onClose: () => void;
    onCreated: () => void;
}

const CrearCategoriaModal = ({ show, onClose, onCreated}: CrearCategoriaModalProps) => {

    const [nombre, setNombre] = useState("");
    const [prefijoSku, setPrefijoSku] = useState("");


    const crearCategoria = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const categoria = {
                nombre,
                prefijo_sku: prefijoSku
            };

            await gestionCategorias.create(categoria);

            onCreated();
            limpiarFormulario();
            onClose();

        } catch (error) {
            console.error("Error al crear categoría:", error);
        }
    };

    const limpiarFormulario = () => {
        setNombre("");
        setPrefijoSku("");
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
                    Nueva categoría
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={crearCategoria}>

                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Nombre de la categoría
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
                            Prefijo SKU
                        </Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Ej: ROP"
                            maxLength={3}
                            value={prefijoSku}
                            onChange={(e) => setPrefijoSku(e.target.value)}
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
                        Crear categoría
                    </Button>

                </Modal.Footer>

            </Form>
        </Modal>
    );
};

export default CrearCategoriaModal;