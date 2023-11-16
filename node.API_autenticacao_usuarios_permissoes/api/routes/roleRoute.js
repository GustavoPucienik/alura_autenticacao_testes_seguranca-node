const { Router } = require('express');
const roleController = require("../controllers/roleController.js")

const router = Router()

router
    .post('/role', roleController.cadastrar)
    .get('/role')
    .get('/role/:id')
    .delete('/role/:id')
    .put('/role/:id');

module.exports = router;