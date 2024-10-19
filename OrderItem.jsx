import React, { useState } from "react";
import OrderForm from "./OrderForm";

const OrderItem = ({ pedido, excluirPedido, editarPedido }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="order-item">
      {isEditing ? (
        <OrderForm pedidoParaEditar={pedido} editarPedido={editarPedido} />
      ) : (
        <div>
          <p>
            Cliente: {pedido.cliente} | Serviço: {pedido.servico} | Status: {pedido.status}
          </p>
          <button className="edit" onClick={toggleEdit}>Editar</button>
          <button onClick={() => excluirPedido(pedido.id)}>Excluir</button>
        </div>
      )}
    </div>
  );
};

export default OrderItem;
