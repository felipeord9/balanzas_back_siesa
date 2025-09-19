const express = require('express')
const ProveedorController = require('../../controllers/proveedorController')

const router = express.Router()

router
  .get('/', ProveedorController.findAllProveedores)
  .get("/:id", ProveedorController.findOneProveedor)

module.exports = router