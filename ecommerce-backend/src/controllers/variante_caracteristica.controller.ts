import { Request, Response } from "express";

import { obtenerCaracteristicasPorVarianteService, crearVarianteCaracteristicaService } from "../services/variante_caracteristica.service.js";

import { crearVarianteCaracteristicaSchema } from "../schemas/variante_caracteristica.schema.js";

export const obtenerCaracteristicasPorVarianteController = async (req: Request, res: Response) => {
    try {
        const varianteId = Number(req.params.varianteId);

        const caracteristicas =
            await obtenerCaracteristicasPorVarianteService(varianteId);

        return res.status(200).json(caracteristicas);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al obtener las características de la variante"
        });
    }
};

export const crearVarianteCaracteristicaController = async (req: Request, res: Response) => {
    try {
        const varianteId = Number(req.params.varianteId);

        const data = crearVarianteCaracteristicaSchema.safeParse(req.body);

        if (!data.success) {
            return res.status(400).json({
                mensaje: "Datos inválidos",
                errores: data.error.flatten()
            });
        }

        const caracteristica =
            await crearVarianteCaracteristicaService(
                varianteId,
                data.data
            );

        return res.status(201).json(caracteristica);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error al crear la característica de la variante"
        });
    }
};