/* eslint-disable import/no-extraneous-dependencies */
import { expect, describe, it } from '@jest/globals';
import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho', () => {
  it('Deve inicializar vazio', () => {
    const carrinho = new Carrinho();
    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve ter itens', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('maça', 0.5, 1);

    expect(typeof item).toBe('object');
    expect(typeof item2).toBe('object');

    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(Array.isArray(carrinho.itens)).toBe(true);// verifica se o método isArray retorna true
    expect(carrinho.itens[0]).toBe(item);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item);
    expect(carrinho.itens).toContain(item2);
  });

  it('A propriedade "itens" deve ser um array', () => {
    const carrinho = new Carrinho();
    expect(Array.isArray(carrinho.itens)).toBe(true);
    // verifica se o isArray que retorna true se for array, é igual a true
  });

  it('Deve ter propriedade "total" na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total'); // verifica se existe a propriedade
  });

  it('Deve lançar erro ao finalizar compra com carrinho vazio', () => {
    function englobaErroCarrinho() { // usa a função para capturar o comportamento que gera erro
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }

    expect(englobaErroCarrinho).toThrowError('Carrinho de compras vazio');
    // verifica se o erro é igual ao que deve ser mostrado
    expect(() => { // forma alternativa
      const carrinho = new Carrinho();
      carrinho.finalizaCompra();
    }).toThrowError('Carrinho de compras vazio');
  });

  it('Deve adicionar o frete', () => {
    const carrinho = new Carrinho();
    carrinho.adicionaFrete(10);

    expect(carrinho.frete).toBe(10);
  });

  it('Deve finalizar as compras', () => {
    const item = new Item('Banana', 2, 5);
    const item2 = new Item('Mel', 1, 5);
    const carrinho = new Carrinho();
    carrinho.adiciona(item);
    carrinho.adiciona(item2);
    carrinho.adicionaFrete(10);
    carrinho.calculaTotal();

    expect(carrinho.calculaTotal()).toBe(25);
    expect(carrinho.finalizaCompra()).toStrictEqual({
      subtotal: 15,
      frete: 10,
      total: 25,
    });
  });
});
