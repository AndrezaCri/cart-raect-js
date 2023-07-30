
import React, { useContext } from 'react';
import { DataContext } from '../componets/DataContext';
import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export const Card = () => {

  const { produtos, adicionarProdutoAoCarrinho } = useContext(DataContext);

  
  return (
    <>
    {produtos.map((produto) =>(

    
      <CardBS className="card h-90 m-3 p-2"key={produto.id}>
        <CardBS.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2017/07/06/17/02/vacations-2478590_640.jpg"
          alt="CardBS.img"
        />
        <CardBS.Body>
        {produto?.nome && <CardBS.Title>{produto.nome}</CardBS.Title>}
          {produto?.descricao && (
            <CardBS.Text>
              <h5>{produto.descricao}</h5>
            </CardBS.Text>
          )}
          {produto?.preco && (
            <CardBS.Text>
              <h4 className="fw-bolder">Valor:</h4>
              R$ {produto.preco.toFixed(2)}
            </CardBS.Text>
          )}
        </CardBS.Body>
        
        <CardBS.Footer>
          <Button variant="primary" onClick={() => adicionarProdutoAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </Button>
        </CardBS.Footer>
      </CardBS>
      ))}
    </>
  );
};
