import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const ParentComponent = styled.div`
  border: 1px solid red;
  height: 900px;
  width: 60%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  #childrens {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
export const Form = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;

  input {
    width: 260px;
    height: 30px;
    margin-top: 10px;
    text-align: center;
  }
`;
