import React, { useEffect, useState } from 'react';
import { gestionCategorias } from '../../services/api';
import type { Categoria } from '../../services/categoria';

const GestionProductosPage = () => {

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [loading, setLoading] = useState(false);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<number | null>(null);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);


    useEffect(() => {

        cargarCatalogos();

    }, []);

    const cargarCatalogos = async () => {

        try {

            setLoading(true);

            const respuesta = await gestionCategorias.getAll();

            console.log(respuesta.data);

            setCategorias(respuesta.data);


        } catch (error) {
            console.error('Error al cargar consultorios:', error);
        } finally {
            setLoading(false);
        }

    };

    const renderHeader = () => {
        return (
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1 className="mb-1">Inventario</h1>
                    <p className="text-muted mb-0">
                        Administra los productos de tu tienda.
                    </p>
                </div>

                <button
                    className="btn btn-primary"
                    onClick={() => setMostrarFormulario(true)}
                >
                    + Agregar producto
                </button>
            </div>
        );
    };

    const renderFormulario = () => {
        if (!mostrarFormulario) {
            return null;
        }

        return (
            <div>
                <h2>Agregar producto</h2>
            </div>
        );
    };
    const renderCategorias = () => {
        return (
            <div className="mb-4">
                <label htmlFor="categoria" className="form-label">
                    Categoría
                </label>

                <select
                    className="form-select"
                    value={categoriaSeleccionada ?? ""}
                    onChange={(e) =>
                        setCategoriaSeleccionada(Number(e.target.value))
                    }
                >
                    <option value="">
                        -- Seleccione una categoría --
                    </option>

                    {categorias.map((categoria) => (
                        <option
                            key={categoria.id}
                            value={categoria.id}
                        >
                            {categoria.nombre}
                        </option>
                    ))}
                </select>
            </div>
        );
    };




    return (
        <div className="container py-4">
            {renderHeader()}
            {renderFormulario()}
        </div>
    );
};

export default GestionProductosPage;