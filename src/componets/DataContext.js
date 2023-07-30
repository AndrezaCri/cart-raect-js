import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([
    {
      id: 123,
      nome: 'Produto A',
      descricao: 'Descrição do Produto A',
      preco: 29.99,
      quantidade: 0,
    },
    {
      id: 445,
      nome: 'Produto B',
      descricao: 'Descrição do Produto B',
      preco: 99.99,
      quantidade: 0,
    },
    {
      id: 4043,
      nome: 'Produto C',
      descricao: 'Descrição do Produto C',
      preco: 49.99,
      quantidade: 0,
    },

  ]);
  const [carrinho, setCarrinho] = useState([]);

  const adicionarProdutoAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const removerProdutoDoCarrinho = (produtoId) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== produtoId);
    setCarrinho(novoCarrinho);
  };

  const atualizarQuantidadeNoCarrinho = (produtoId, quantidade) => {
    const novoCarrinho = carrinho.map((item) =>
      item.id === produtoId ? { ...item, quantidade } : item
    );
    setCarrinho(novoCarrinho);
  };

  const calcularTotalCarrinho = () => {
    const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    return total.toFixed(2);
  };

  return (
    <DataContext.Provider
      value={{
        produtos,
        setProdutos,
        carrinho,
        setCarrinho,
        adicionarProdutoAoCarrinho,
        removerProdutoDoCarrinho,
        atualizarQuantidadeNoCarrinho,
        calcularTotalCarrinho,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };



