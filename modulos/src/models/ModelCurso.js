import { DataTypes, Sequelize } from "sequelize";
import { conn } from "../config/database.js";

export const Curso = conn.define("Curso", {
    id_curso: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: true
})