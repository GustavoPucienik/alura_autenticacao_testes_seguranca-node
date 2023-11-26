import { describe, expect } from '@jest/globals';
import AuthService from '../../services/authService.js';

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuario deve possuir nome, email e senha', async () => {
    // arrage
    const usuarioMock = {
      nome: 'Isis',
      email: 'isis@gmail.com',
    };

    // act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    // assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuario é obrigatório.');
  });
});
