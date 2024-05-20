import { Sequelize } from "sequelize";

const db = new Sequelize(
    "ciaf-api-express",
    "root",
    process.env.DB_PASSWORD || "",

    {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || 3306,
        dialect: "mysql",

        define: {
            timestamps: true,
        },

        pool: {
            max: 5,
            min: 0,
            idle: 10000,
            acquire: 30000,
        },
    }


);
export default db;