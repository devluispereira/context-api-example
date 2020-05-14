import React, { useContext, useState } from "react";
import UserContext from "../../context/user/context";

import { Container, ParentComponent, Form } from "./styles";

import ChildrenOne from "../../components/ChildrenOne";
import ChildrenTwo from "../../components/ChildrenTwo";
import ChildrenThree from "../../components/ChildrenThree";

const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { setState } = useContext(UserContext);

  function handleSubmit() {
    setState({ email, lastName, name });
  }
  return (
    <Container>
      <Form>
        <h2>Inserir Dados</h2>
        <input
          type="text"
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="sobrenome"
          onChange={(e) => setLastName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <button type="button" onClick={handleSubmit}>
          Pronto
        </button>
      </Form>
      <ParentComponent>
        <h1>Componente Pai</h1>
        <p>o componente pai</p>

        <div id="childrens">
          <ChildrenOne />
          <ChildrenTwo />
          <ChildrenThree />
        </div>
      </ParentComponent>
    </Container>
  );
};

export default Login;
