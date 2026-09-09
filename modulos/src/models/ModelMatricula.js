import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Matricula = conn.define("Matricula", {
    id_matricula: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: true
})