import React, { useContext, useState } from "react";

import UserGlobalContext from "../../context/user/context";

import { Container } from "./styles";
const ChildrenThree: React.FC = () => {
  const { setState, state } = useContext(UserGlobalContext);
  const [email, setEmail] = useState<string>("");

  function handleEditEmail() {
    setState({
      ...state,
      email: email,
    });
  }

  return (
    <Container>
      <h2>Filho 03</h2>
      <strong>Eu altero o Email</strong>
      <input
        type="text"
        placeholder="Novo Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="button" onClick={handleEditEmail}>
        Alterar
      </button>
      <div>
        <span>
          name : <strong>{state.name}</strong>
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

export default ChildrenThree;
