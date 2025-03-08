import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const ContainerMaior = styled.div`

`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContentButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
font-family: arial;
font-size: 20px;

`;

export const LabelValor = styled.label`
font-family: arial;
font-size: 20px;
margin: 0 -63px;

`;

export const LabelEst = styled.label`
font-family: arial;
font-size: 20px;
 margin: 0 0px;
`;

export const LabelId = styled.label`
font-family: arial;
font-size: 20px;
 margin: 0 0px;
`;


export const LabelVendaNumero = styled.label`
font-family: arial;
font-size: 20px;
 margin: 0 -10px;
`;



export const InputVendaNumero = styled.input`
font-family: arial;
font-size: 25px;
margin: 0 -10px;
width: 150px;
background-color: white; 
border-radius: 5px;
border: 1px solid #ccc;
height: 45px;
margin-top: 2px;
padding: 5px 10px;
`;

export const InputDes = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 25px;
  font-family: arial;
  border: 1px solid #ccc;
  width: 300px;
  margin-top: 2px;
`;

export const InputValor = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 25px;
  font-family: arial;
  border: 1px solid #ccc;
  width: 150px;
  margin: 0 -63px;
  margin-top: 2px;
`;

export const InputId = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 25px;
  font-family: arial;
  border: 1px solid #ccc;
  width: 80px;
`;

export const InputEst = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 25px;
  font-family: arial;
  border: 1px solid #ccc;
  width: 80px;
`;

export const Button = styled.button`
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: yellowgreen;
  margin-top: 60px;
  margin-left: 0px;
  width: 90px;
  height: 35px;

`;
export const ButtonReturn = styled.button`
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: orange;
  margin-top: 60px;
  margin-left: -90px;
  width: 90px;
   height: 35px;

`;
export const ButtonDelete = styled.button`
  padding: 5px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: red;
  margin-top: 60px;
  margin-left: -90px;
  width: 90px;
  height: 35px;

`;













