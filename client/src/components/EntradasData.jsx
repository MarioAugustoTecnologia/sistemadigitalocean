import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const EntradasData = () => { 
  

  const [entradadata, setEntradadata] = useState([]);
  const [buscadata, setBuscaData] = useState("")

  //const buscarap = buscanome.toLowerCase() 
  
  var table = entradadata.filter(item => item.data.includes(buscadata))  

  
  useEffect(() => {

    fetch("http://localhost:3000/vendas").then((res) => {

    return res.json()

    }).then((resp) => {

      setEntradadata(resp)

    }).catch((err) => {
      console.log(err.message)
    }) 
   
  }, [])
  
  
  const handleDelete = (id) => {
    
     Swal.fire({
          title: "Deseja Excluir ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Excluir",
          denyButtonText: `Não Excluir`
        }).then((result) => {
    
          if (result.isConfirmed) {
    
    
            fetch("http://localhost:3000/vendas/" + id, {
    
              method: "DELETE"
    
            }).then((res) => {
    
              window.location.reload();
              //toast.success('Excluido com sucesso !')      
    
            }).catch((err) => {
              toast.error('Erro ! :' + err.message)
            })
    
          } else if (result.isDenied) {
            Swal.fire("Nada excluido", "", "info");
          }
        });
    

  
}

function somar(){

  if(buscadata === "" || buscadata === null){
    toast.warning("O campo busca por data está vazio !")

  }else{

    let valores = [];

    table.map(item => {
    valores.push(item.valorpag)
  })

  let soma = valores.reduce((previous_value, current_value) => {      
    return parseFloat(previous_value) + parseFloat(current_value);    
  })

  const total = soma.toFixed(2);
  document.getElementById('total').innerHTML = total;

  }

  

}

const logout = () => {
  localStorage.clear()
  console.clear();
  
}
    
  return (
    <div className="container-fluid" style={{fontFamily:'arial', fontSize:'19px'}}>
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
           <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <Link
              to=""
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
              >
               <span className='fs-5 fw-bolder d-none d-sm-inline'>
               Opções:
             </span>
             </Link>
             <ul
             className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
             id="menu"
           >
             <li className="w-100">
               <Link
                 to="/home"
                 className="nav-link text-white px-0 align-middle"
               >
                 <i className="fs-4 bi-speedometer2 ms-2"></i>
                 <span className="ms-2 d-none d-sm-inline">Painel:</span>
               </Link>
             </li>
             <li className="w-100">
               <Link
                 to="/usuarios"
                 className="nav-link px-0 align-middle text-white"
               >
                 <i className="fs-4 bi-people ms-2"></i>
                 <span className="ms-2 d-none d-sm-inline">
                  Usuarios:
                 </span>
               </Link>
             </li> 
             <li className="w-100">
                <Link
                  to="/entradas"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-cash-coin ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Gestão de Vendas:
                  </span>
                </Link>
              </li> 
              <li className="w-100">
                <Link
                  to="/compras"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-cash ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Compras:
                  </span>
                </Link>
              </li> 
              <li className="w-100">
                <Link
                  to="/despesas"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-coin ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Despesas:
                  </span>
                </Link>
              </li>            
              <li className="w-100">
                <Link
                  to="/produtos"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-box-fill ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                   Produtos:
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/fornecedores"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-truck ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                 Fornecedores:
                  </span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/clientes"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-person-square ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                    Clientes:
                  </span>
                </Link>
              </li> 
              <li className="w-100">
                <Link
                  to="/resultado"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi bi-bank ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">
                     Resultado:
                  </span>
                </Link>
              </li>   
             
              
              <li className="w-100" onClick={logout}>
                <Link to='/'
                 className="nav-link px-0 align-middle text-white"
                 >
                 <i className="fs-4 bi-power ms-2"></i>
                 <span className="ms-2 d-none d-sm-inline">Logout</span>
               </Link>
             </li>
           </ul>
         </div>
       </div>
       <div className="col p-0 m-0">
           <div className="p-2 d-flex justify-content-center shadow text-white" style={{backgroundColor:'blue', width:'145%'}}>
               <h4><strong>Sistema de Gestão Comercial:</strong></h4>
           </div>
           <Outlet />
           <div className="px-5 mt-5">
               <div className="mb3">
                  <label htmlFor="Nome" className="Nome" style={{fontFamily: 'arial', fontSize:'22px'}}>Busca por data:</label><br />
                  <input type="search" autoFocus='true' className="consultadata" value={buscadata} onChange={(e) => setBuscaData(e.target.value)} style={{fontFamily: 'arial', fontSize:'22px'}} />
                  <Link to="/entradas" className="btn btn-success" style={{fontSize: '18px', width:'140px', margin:'0 20px'}}>Voltar:</Link> 
                  <Link onClick={somar} className="btn" style={{color: 'white', backgroundColor:'gray', margin: '0 25px', fontSize: '18px'}}>Total Entradas:</Link>
                  <strong style={{fontSize:'30px'}}>Total:</strong> 
                  <strong><span id="total" style={{color:'green', fontSize:'32px', margin:'0 10px'}}></span></strong>  
                </div><br />                    
                  <h4 style={{textAlign: 'center', color: 'Red', fontSize: '25px', marginRight:'-225px'}}><strong>Entradas:</strong></h4>                         
                     <br />
                     <div className="mt-3">
                        <table className="table" id="table" style={{margin:'0 -30px', fontFamily:'arial', fontSize:'20px', width:'150%'}}>
                              <thead>
                                  <tr>
                                  <th className="th" scope="col">Id:</th>
                                  <th className="th" scope="col">Venda nº:</th>                                 
                                  <th className="th" scope="col">Nome:</th>
                                  <th className="th" scope="col">Qtd:</th>
                                  <th className="th" scope="col">Preço:</th>  
                                  <th className="th" scope="col">Total c/s Desconto:</th>
                                  <th className="th" scope="col">Forma Paga:</th> 
                                  <th className="th" scope="col">Entradas:</th> 
                                  <th className="th" scope="col">Troco:</th>
                                  <th className="th" scope="col">Parcelamento:</th>
                                  <th className="th" scope="col">Parcela:</th>
                                  <th className="th" scope="col">Mês:</th>                                                                                                    
                                  <th className="th" scope="col">Data de Cadastro:</th>                                                                                                                                            
                                  <th className="th" scope="col">Ação:</th>                            
                                  </tr> 
                              </thead>
                              <tbody>                                
                                { 
                                    table.map(item => (
                                    <tr key={item.id}>
                                           <td className="td">{item.id}</td>
                                           <td className="td">{item.vendan}</td>                                      
                                           <td className="td">{item.nome}</td>
                                           <td className="td">{item.quant}</td>
                                           <td className="td">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.preco)}</td>
                                           <td className="td">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.total)}</td>
                                           <td className="td">{item.formapag}</td>
                                           <td className="td">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.valorpag)}</td>
                                           <td className="td">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.troco)}</td>
                                           <td className="td">{item.parcelamento}</td>
                                           <td className="td">{item.parcelan}</td>
                                           <td className="td">{item.mes}</td>                                                                                                                                                           
                                           <td className="td">{item.data}</td>                                                                                             
                                                                                                                                                                                                                                                                                                                                                  
                                           <td className="td" >
                                                                            
                                           <button className="excluir" onClick={() => {handleDelete(item.id)}} style={{color:'white', backgroundColor:'red', border:'none', borderRadius:'5px'}}>Excluir:</button> 
                                                         
                                           </td> 

                                    </tr>
                                  ))
                                                                                                     
                                }   
                                                                       
                              </tbody>
                              <ToastContainer/> 
                
                          </table> 
                    </div>
                 <br />
                                       
          </div>                          
                                   
       </div> 
                 
    </div>
 </div>
  )
}

export default EntradasData