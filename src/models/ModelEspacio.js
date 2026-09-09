import { DataTypes, Sequelize } from "sequelize";
import { conn } from "../config/database.js";

export const Espacio = conn.define("Espacio", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    },
    ubicacion: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    estado: {
        type: DataTypes.ENUM('disponible', 'mantenimiento', 'inactivo'),
        defaultValue: 'disponible',
        allowNull: false
    }
}, {
    tableName: 'espacios',
    timestamps: true
});

module.exports = ModelEspacio;