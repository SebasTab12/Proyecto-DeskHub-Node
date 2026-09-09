import { DataTypes } from "sequelize";
import { conn } from "../config/database.js";

export const Matricula = conn.define("Matricula", {
id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  id_espacio: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'espacios',
      key: 'id'
    }
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'cancelada'),
    defaultValue: 'pendiente',
    allowNull: false
  }
}, {
  tableName: 'Matriculas',
  timestamps: true
});

module.exports = ModelUsuarios;