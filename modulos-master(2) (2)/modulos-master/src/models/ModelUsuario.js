import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Usuarios = conn.define("Usuarios", {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
})