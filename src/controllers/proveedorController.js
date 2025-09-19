const ProveedorService = require("../services/proveedorService");

const findAllProveedores= async (req, res, next) => {
  try {
    const data = await ProveedorService.find();
    res.status(200).json({
      status: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneProveedor= async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const provee = await ProveedorService.findOne(id);
    res.status(200).json({
      status: "OK",
      provee,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};


module.exports = {
  findAllProveedores,
  findOneProveedor
};
