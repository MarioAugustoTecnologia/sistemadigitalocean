import React from "react";
import ResumeItem from "../ResumeItemEntradas";
import * as C from "./styles";
import {
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, total }) => {
  return (
    <C.Container>
      <ResumeItem
        title="Entradas"       
        value={income}
      />    
     
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  );
};

export default Resume;
