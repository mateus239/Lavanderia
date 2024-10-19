import React, { useState, useEffect } from "react";

const OrderForm = ({ adicionarPedido, pedidoParaEditar, editarPedido }) => {
  const [formState, setFormState] = useState({
    cliente: "",
    servico: "lavagem",
    status: "pendente",
  });

  useEffect(() => {
    if (pedidoParaEditar) {
      setFormState(pedidoParaEditar);
    }
  }, [pedidoParaEditar]);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pedidoParaEditar) {
      editarPedido(formState);
    } else {
      adicionarPedido(formState);
    }
    setFormState({
      cliente: "",
      servico: "lavagem",
      status: "pendente",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cliente"
        placeholder="Nome do cliente"
        value={formState.cliente}
        onChange={handleChange}
        required
      />
      <select name="servico" value={formState.servico} onChange={handleChange}>
        <option value="lavagem">Lavagem</option>
        <option value="secagem">Secagem</option>
        <option value="passar">Passar</option>
      </select>
      <select name="status" value={formState.status} onChange={handleChange}>
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em andamento</option>
        <option value="concluído">Concluído</option>
      </select>
      <button type="submit">{pedidoParaEditar ? "Atualizar" : "Adicionar"} Pedido</button>
    </form>
  );
};

export default OrderForm;
