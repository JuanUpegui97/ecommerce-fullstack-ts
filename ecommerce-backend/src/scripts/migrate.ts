import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import pool from "../config/database.js";

dotenv.config();

const runMigrations = async () => {

    try {

        const migrationsPath = path.join(
            process.cwd(),
            "database",
            "migrations"
        );

        // Lee los scripts SQL y los ordena por número.
        const files = fs.readdirSync(migrationsPath).sort();

        // Verificamos si la tabla migrations ya existe.
        const tableExists = await pool.query(`
            SELECT EXISTS (
                SELECT FROM information_schema.tables
                WHERE table_schema = 'public'
                AND table_name = 'migrations'
            );
        `);

        // Primera ejecución: ejecutamos 000_create_migrations.sql.
        if (!tableExists.rows[0].exists) {

            const firstFile = files[0];

            if (!firstFile) {
                throw new Error("No existen archivos de migración.");
            }

            const firstFilePath = path.join(
                migrationsPath,
                firstFile
            );

            const firstSql = fs.readFileSync(
                firstFilePath,
                "utf-8"
            );

            console.log(`📄 Ejecutando: ${firstFile}`);

            await pool.query(firstSql);

            await pool.query(
                "INSERT INTO migrations (archivo) VALUES ($1)",
                [firstFile]
            );

            console.log(`✅ ${firstFile} ejecutado.`);
        }

        // Ahora migrations ya existe y podemos consultar los scripts ejecutados.
        const result = await pool.query(
            "SELECT archivo FROM migrations"
        );

        // Ejecutamos las migraciones que todavía no existen en migrations.
        for (const file of files) {

            const existe = result.rows.find(
                (migration) => migration.archivo === file
            );

            if (existe) {
                console.log(`⏭️ Omitiendo: ${file}`);
                continue;
            }

            const filePath = path.join(
                migrationsPath,
                file
            );

            const sql = fs.readFileSync(
                filePath,
                "utf-8"
            );

            console.log(`📄 Ejecutando: ${file}`);

            await pool.query(sql);

            await pool.query(
                "INSERT INTO migrations (archivo) VALUES ($1)",
                [file]
            );

            console.log(`✅ ${file} ejecutado.`);
        }

        console.log("🎉 Migraciones completadas.");

    } catch (error) {

        console.error(
            "❌ Error ejecutando migraciones:",
            error
        );

    }
};

runMigrations();