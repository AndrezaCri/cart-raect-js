import React, { useContext, useEffect, useState } from 'react';
import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DataContext } from '../componets/DataContext';

export const Carrinho = () => {
  const { carrinho, removerProdutoDoCarrinho, atualizarQuantidadeNoCarrinho, calcularTotalCarrinho } = useContext(DataContext);

  const [carrinhoItens, setCarrinhoItens] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinhoItens(items);
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    setCarrinhoItens(carrinho);
  }, [carrinho]);

  return (
    <CardBS className="carrinho mt-3">
      <CardBS.Header as="h2">Carrinho de Compras</CardBS.Header>
      <CardBS.Body>
        {carrinho.length === 0 ? (
          <div>O carrinho está vazio.</div>
        ) : (
          <>
            <Row>
              {carrinho.map((produto) => (
                <Col xs={12} md={4} key={produto.id}>
                  <CardBS className="mb-2">
                    <CardBS.Body>
                      <CardBS.Title>{produto.nome}</CardBS.Title>
                      <CardBS.Img variant="top" src="https://cdn.pixabay.com/photo/2017/07/06/17/02/vacations-2478590_640.jpg"
                        alt={produto.nome} />
                      <CardBS.Text>
                        Preço: R$ {produto.preco.toFixed(2)} <br />
                        Quantidade:
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="mx-2"
                          onClick={() => atualizarQuantidadeNoCarrinho(produto.id, produto.quantidade - 1)}
                        >
                          -
                        </Button>
                        {produto.quantidade}
                        <Button
                          variant="outline-secondary"
                          size="sm"
                          className="mx-2"
                          onClick={() => atualizarQuantidadeNoCarrinho(produto.id, produto.quantidade + 1)}
                        >
                          +
                        </Button>
                        <br />
                        Total do Item: R$ {(produto.preco * produto.quantidade).toFixed(2)}
                      </CardBS.Text>
                      <Button variant="danger" onClick={() => removerProdutoDoCarrinho(produto.id)}>
                        Remover
                      </Button>
                    </CardBS.Body>
                  </CardBS>
                </Col>
              ))}
            </Row>
            <div className="font-weight-bold">Total da Compra: R$ {calcularTotalCarrinho()}</div>
          </>
        )}
      </CardBS.Body>
    </CardBS>
  );
};
