import React from 'react';
import { Card } from './Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import  {Carrinho}  from './Carrinho';
import { DataContext } from '../componets/DataContext';




export const Home = () => {
    
    return (
        <DataContext.Consumer>
            {(context) => (
                <div className="home">
                    <header className="bg-dark py-5">
                        <div className="container px-4 px-lg-5 my-5">
                            <div className="text-center text-white">
                                <h1 className="display-4 fw-bolder"> Grande Promação do Ano</h1>
                                <p className="lead fw-normal text-white-50 mb-0">Confira</p>
                            </div>
                        </div>
                    </header>
                
                    <Container fluid>
                        <h1 className="text-center">Produtos diponiveis!</h1>
                        <Row className="g-4 justify-content-center">
                            {context.produtos.slice(0, 1).map((produto) => (
                                <Col key={produto.id} xs={12} md={10} className="d-flex">
                                    <Card produto={produto}/>
                                </Col>
                            ))}
                        </Row>
                        <Carrinho/>
                    </Container>
                </div>     
            )}
        </DataContext.Consumer>

    )
}

