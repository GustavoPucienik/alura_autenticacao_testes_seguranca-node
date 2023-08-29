/* eslint-disable import/no-extraneous-dependencies */
import { expect, describe, it } from '@jest/globals';
// eslint-disable-next-line no-unused-vars
import { somaHorasExtras, calculaDescontos } from '../index.js';

describe('Testes dos cálculos de folha', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve descontar o valor do salário', async () => {
    const esperado = 2300;
    const retornado = await calculaDescontos(2500, 200);

    expect(Promise.resolve(retornado)).resolves.toBe(esperado);
  });
});
