const { Op } = require("sequelize");
const { models } = require("../libs/sqlServer");

const find = () => {
  const proveedores = models.Proveedor.findAll({
    where: {
      idTercero: {
        [Op.not]: null,
      },
      idSucursal: {
        [Op.not]: null,
      },
      estado: 1,
      idSucursal: '001',
    }
    /* limit: 2500, */
  });
  return proveedores;
};

const findOne = (id) => {
  const proveedor = models.Proveedor.findOne({
    where: {
      idTercero: id
    }
  })

  if(!proveedor) throw new Error('No se encontro el proveedor')

  return proveedor
}

module.exports = {
  find,
  findOne
};
