import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = "Demonstração do curso";
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);
console.log('cifra',cifra)

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log('mensagem cifrada',mensagemCifrada);

// Transmissão ------- chave, vi, mensagem

// decifrar a mensagem

const decifra = createDecipheriv('aes256', chave, vi);
console.log('decifra',decifra);

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')
console.log('Mensagem Decifra',mensagemDecifrada);
