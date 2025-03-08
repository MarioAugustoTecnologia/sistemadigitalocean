import React, { useState, useEffect } from "react";
import Grid from "../GridEntradas";
import * as C from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {


  const {pcod} = useParams();
 

  useEffect(() => {
    fetch("http://localhost:3000/produtos/" + pcod).then((res) => {
        return res.json();
    }).then((resp) => { 
        setId(resp.id);         
        setNome(resp.nome);
        setPreco(resp.preco);
        setQtd(resp.qtd);
        setCategoria(resp.categoria);
        setDataCad(resp.data_cadastro);
        setCodigo(resp.codigo);      
    
    }).catch((err) => {
        console.log(err.message);
    })
}, []);
   
const [nome, setNome] = useState("");
const [preco, setPreco] = useState("");
const [quant, setQtd] = useState("");
const [categoria, setCategoria] = useState("");
const [data_cadastro, setDataCad] = useState("");
const [codigo, setCodigo] = useState("");
const [id, setId] = useState("");
const [vendan, setVendaN] = useState("");


function formataData(){
  let data = new Date(),
  dia = data.getDate().toString().padStart(2, '0'),
  mes = (data.getMonth()+1).toString().padStart(2, '0'),
  ano = data.getFullYear();
return `${dia}/${mes}/${ano}`;
}

const data = formataData();
const navigate = useNavigate()  

  const generateID = () => Math.round(Math.random() * 1000); 

  
  const handleSave = (e) => {

    e.preventDefault()

    if (!nome || !preco || !vendan) {
      alert("Campos devem estar preenchidos !");
      return;
    } 
   
    const transaction = {
      id: generateID(),
      nome: nome,
      preco: preco,
      vendan: vendan,
      data: data,    
    };

    handleAdd(transaction); 
    
    function Subtract() {
     return quant - 1;    
    }   
    
    const qtd = Subtract();
    
    const total = preco;

    const edtobj = {id, nome, preco, qtd, categoria, data_cadastro, codigo}

    fetch("http://localhost:3000/produtos/" + pcod, {
      method: "PUT",
      headers: {'content-type':'application/json'},
      body: JSON.stringify(edtobj)
    }).then((res) => {        
        console.log(qtd);  

    }).catch((err) => {
      toast.error('Erro ! :' +err.message)
    })       
    
    const valorpag = 0;
    const troco = 0; 
    const mes = '.';       
    const cadobj = { nome, preco, data, total, vendan, valorpag, troco, mes }    

      fetch("http://localhost:3000/vendas", {
        method: "POST",
        headers: {'content-type':'application/json'},
        body: JSON.stringify(cadobj)
      }).then((res) => { 
          navigate('/produtos/codigo')
      }).catch((err) => {
        toast.error('Erro ! :' +err.message)
      })      
        
  };

  const retorna = () => {
    navigate('/produtos/codigo')
  }

  const Delete = () => {
   localStorage.removeItem('transactions', [])  //=> Exclui todos os dados (Values) presentes da chave 'transactions'
   navigate('/produtos/codigo');
  }

  return (
    <C.ContainerMaior>
      <C.Container>
        <C.InputContent>
          <C.Label>Descrição</C.Label>
          <C.InputDes value={nome} onChange={(e) => setNome(e.target.value)} />
        </C.InputContent>
        <C.InputContent>
          <C.LabelValor>Valor</C.LabelValor>
          <C.InputValor
            value={preco}
            type="decimal"
            onChange={(e) => setPreco(e.target.value)}         
          />                  
        </C.InputContent> 
      
        <C.InputContent>
           <C.LabelVendaNumero>Venda nº:</C.LabelVendaNumero>
           <C.InputVendaNumero value={vendan} onChange={(e) => setVendaN(e.target.value)} autoFocus='true'/>                 
        </C.InputContent>    
          <C.Button onClick={handleSave}>Adicionar:</C.Button>
          <C.ButtonReturn onClick={retorna}>Voltar:</C.ButtonReturn>        
          <C.ButtonDelete onClick={Delete}>Deletar:</C.ButtonDelete>        
           
        <ToastContainer /> 
      </C.Container>  
    
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </C.ContainerMaior>
  );
};

export default Form;
