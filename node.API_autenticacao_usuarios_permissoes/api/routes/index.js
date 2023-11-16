const bodyParser = require('body-parser');
const produto = require('./produtoRoute');
const usuario = require('./usuariosRoute.js');
const auth = require("./authRoute.js");
const role = require('./roleRoute.js');

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    produto,
    usuario,
    role
  )
}
