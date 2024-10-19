import React, { useState } from "react";
import OrderForm from "./components/OrderForm";
import OrderList from "./components/OrderList";
import './App.css'; // Importando o CSS

const App = () => {
  const [pedidos, setPedidos] = useState([]);

  const adicionarPedido = (novoPedido) => {
    setPedidos([...pedidos, { ...novoPedido, id: Date.now() }]);
  };

  const editarPedido = (pedidoAtualizado) => {
    setPedidos(
      pedidos.map((pedido) =>
        pedido.id === pedidoAtualizado.id ? pedidoAtualizado : pedido
      )
    );
  };

  const excluirPedido = (id) => {
    setPedidos(pedidos.filter((pedido) => pedido.id !== id));
  };

  return (
    <div>
      <h1>Gerenciamento de Pedidos de Lavanderia</h1>
      <OrderForm adicionarPedido={adicionarPedido} />
      <OrderList
        pedidos={pedidos}
        excluirPedido={excluirPedido}
        editarPedido={editarPedido}
      />
    </div>
  );
};

export default App;
