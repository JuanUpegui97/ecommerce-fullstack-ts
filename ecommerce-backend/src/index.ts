import app from "./server.js";
import pool from "./config/database.js";
import cloudinary from "./config/cloudinary.js";

const PORT = 3000;

const iniciarServidor = async () => {
    try {

        console.log("🔌 Conectando a PostgreSQL...");

        await pool.query("SELECT 1");

        console.log("✅ PostgreSQL conectado.");

        await cloudinary.api.ping();

        console.log("✅ Cloudinary conectado.");


        app.listen(PORT, () => {
            console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
        });

    } catch (error) {

        console.error("❌ Error al conectar con PostgreSQL:", error);

        process.exit(1);
    }
};

iniciarServidor();