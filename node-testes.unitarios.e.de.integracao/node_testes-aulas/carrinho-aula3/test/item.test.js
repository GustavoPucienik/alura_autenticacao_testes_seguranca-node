/* eslint-disable import/no-extraneous-dependencies */
import { expect, describe, it } from '@jest/globals';
import Item from '../item.js';

describe('Testes dos itens', () => {
  it('Deve ter 3 campos: nome, valor, quantidade', () => {
    const item = new Item('Beterraba', 2.5, 10);

    expect(item.nome).toBe('Beterraba');
    expect(item.valor).toBe(2.5);
    expect(item.quantidade).toBe(10);
  });

  it('Deve ter o preco calculado de acordo com a quantidade', () => {
    const item = new Item('Batata', 0.1, 3);

    // eslint-disable-next-line max-len
    expect(item.pegaValorTotalItem()).toBeCloseTo(0.3); // numeros com ponto flutuante utilizar toBeClosed()
  });
});
