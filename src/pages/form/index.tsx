import React, { useContext, useState } from "react";

//nosso unico context criado que será usado junto com o hook useContext
import UserContext from "../../context/user/context";

//componentes do styled-components
import { Container, ParentComponent, Form } from "./styles";

//importando os filhos ---  cada um é um componente que irá compor a pagina
import ChildrenOne from "../../components/ChildrenOne";
import ChildrenTwo from "../../components/ChildrenTwo";
import ChildrenThree from "../../components/ChildrenThree";

const FormData: React.FC = () => {
  //estados criados para armazenar o conteudo digitado dos inputs
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  //usando o useContext para capturar as propriedades do UserContext
  const { setState: setGlobalState } = useContext(UserContext);

  //função que ira submeter a alteração do estado global da aplicação
  function handleSubmit() {
    setGlobalState({ email, lastName, name });
  }
  return (
    <Container>
      {/* formulario que possui 3 inputs
          name, lastName e email.
          ocultei para ficar legal a visualização
       */}

      <ParentComponent>
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
        <h1>Componente Pai</h1>

        <div id="childrens">
          <ChildrenOne />
          <ChildrenTwo />
          <ChildrenThree />
        </div>
      </ParentComponent>
    </Container>
  );
};

export default FormData;
