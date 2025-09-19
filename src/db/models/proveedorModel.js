const { DataTypes, Model } = require("sequelize");
const { TERCERO_TABLE } = require("./terceroModel");

const PROVEEDOR_TABLE = "t202_mm_proveedores";

const ProveedorSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    field: "f202_id_cia",
  },
  idTercero: {
    type: DataTypes.INTEGER,
    field: "f202_rowid_tercero",
    /* references: {
      model: TERCERO_TABLE,
      key: "id",
    }, */
  },
  idSucursal: {
    type: DataTypes.INTEGER,
    field: "f202_id_sucursal",
  },
  descripSucursal: {
    type: DataTypes.STRING,
    field: "f202_descripcion_sucursal",
  },
  estado: {
    type: DataTypes.INTEGER,
    field: "f202_ind_estado",
  },
};

class Proveedor extends Model {
  static associate(models) {
    /* this.belongsTo(models.Tercero, {
      foreignKey: "idTercero",
    }); */
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PROVEEDOR_TABLE,
      modelName: "Proveedor",
      timestamps: false,
    };
  }
}

module.exports = {
  Proveedor,
  ProveedorSchema,
  PROVEEDOR_TABLE,
};