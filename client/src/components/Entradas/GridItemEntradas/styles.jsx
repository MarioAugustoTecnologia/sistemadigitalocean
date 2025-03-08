import styled from "styled-components";

export const Tr = styled.tr``;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  font-family: arial;
  font-size: 22px;

  svg {
    width: 18px;
    height: 18px;
  }
`;


