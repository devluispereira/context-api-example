import React, { useContext, useState } from "react";

//importando o contexto UserContext
import UserContext from "../../context/user/context";

//Container criado no styled-components
import { Container } from "./styles";

const ChildrenOne: React.FC = () => {
  //estado para manipular o novo nome
  const { setState, state } = useContext(UserContext);
  const [name, setName] = useState<string>("");

  //função que irá submeter a alteração do novo nome
  function handleEditName() {
    setState({
      ...state,
      name: name,
    });
  }

  return (
    <Container>
      <h2>Filho 01</h2>
      <strong>Eu altero o Nome</strong>
      <input
        type="text"
        placeholder="Novo Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <button type="button" onClick={handleEditName}>
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

export default ChildrenOne;
