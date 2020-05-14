import React, { useContext, useState } from "react";

import UserGlobalContext from "../../context/user/context";

import { Container } from "./styles";
const ChildrenTwo: React.FC = () => {
  const { setState, state } = useContext(UserGlobalContext);
  const [lastName, setEditLastName] = useState<string>("");

  function handleEditLastName() {
    setState({
      ...state,
      lastName: lastName,
    });
  }

  return (
    <Container>
      <h2>Filho 02</h2>
      <strong>Eu altero o Sobrenome</strong>
      <input
        type="text"
        placeholder="Novo Sobrenome"
        onChange={(e) => setEditLastName(e.target.value)}
      />
      <button type="button" onClick={handleEditLastName}>
        Alterar
      </button>
      <div>
        <span>
          nome : <strong>{state.name}</strong>
        </span>
        <span>
          Sobrenome : <strong>{state.lastName}</strong>
        </span>
        <span>
          Email : <strong>{state.email}</strong>
        </span>
      </div>
    </Container>
  );
};

export default ChildrenTwo;
