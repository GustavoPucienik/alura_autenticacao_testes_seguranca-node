import jwt from "jsonwebtoken";

const chaveSecreta = "Chave super secreta";

const token = jwt.sign(
  {
    apelido: "gp",
    curso: "segurança e node.js"
  }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado);
