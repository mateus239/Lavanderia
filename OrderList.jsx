import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ pedidos, excluirPedido, editarPedido }) => {
  return (
    <div className="order-list">
      <h2>Pedidos</h2>
      {pedidos.length > 0 ? (
        pedidos.map((pedido) => (
          <OrderItem
            key={pedido.id}
            pedido={pedido}
            excluirPedido={excluirPedido}
            editarPedido={editarPedido}
          />
        ))
      ) : (
        <p>Nenhum pedido cadastrado</p>
      )}
    </div>
  );
};

export default OrderList;
