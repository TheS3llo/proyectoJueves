import express from "express";
import cors from "cors";
import productRouter from "./routes/product.route.js";
import db from "./database/db.js";

const app = express();
const port = process.env.PORT || 3000;

// Conexión a la base de datos
const databaseConnection = async () => {
    try {
        await db.authenticate();
        db.sync(); // crea las tablas en la db (si no existen)
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error.message);
    }
};
databaseConnection();

// Middlewares
app.use(express.json()); // envío-recepción de información en formato JSON
app.use(cors()); // consumo de API desde otros puertos diferentes al PORT
app.use(express.static("public")); // contenedor de archivos estáticos - carpeta pública

// Endpoints
app.use("/products", productRouter);

// Levantar aplicación
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
