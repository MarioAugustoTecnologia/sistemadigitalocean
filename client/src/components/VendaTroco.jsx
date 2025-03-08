import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap-icons/font/bootstrap-icons.css";


const VendaTroco = () => {

 
  const [total, totalchange] = useState("") 
  const [valorpag, valorpagchange] = useState("")

  const isValidate = () => {

    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"

    if(total === null || total === ''){
      document.getElementById('total').style.borderColor = 'red';
      isproceed = false
      //errormessage += 'Nome:' 
    }
    if(valorpag === null || valorpag === ''){
        document.getElementById('valorpag').style.borderColor = 'red';
        isproceed = false
        //errormessage += 'Nome:' 
      }
 
    if(!isproceed){
      toast.warning(errormessage)
  
    }   
    
    return isproceed
   }

   function MostraTotal() {
    document.getElementById('total').style.borderColor = 'Gainsboro';
    
   }

   function MostraValorPago() {
    document.getElementById('valorpag').style.borderColor = 'Gainsboro';
    
   }


   function calcular(){

    if (isValidate()) {
        
        const troco = (valorpag - total).toFixed(2);
        console.log(troco) 
        document.getElementById("troco").innerHTML = troco;
      

    } 
      
   }


const logout = () => {
  localStorage.clear()
  console.clear();
  
}
     
  return (
    <div className="container-fluid" style={{fontFamily:'arial'}}>
       <div className="row flex-nowrap">
           <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary" style={{fontFamily:'arial', fontSize:'19px'}}>
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
                    Vendas:
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
           
                <li className="w-100">
                <Link
                  to="/painel/email_servico"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-envelope-at ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Serviços de Email:</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="/painel/Whatsapp"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-whatsapp ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Whatsapp:</span>
                </Link>
              </li>
                 <li className="w-100" onClick={logout}>
                  <Link to="/"
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
              <div className="p-2 d-flex justify-content-center shadow text-white" style={{backgroundColor:'blue', fontFamily:'arial'}}>
                  <h4><strong>Sistema de Gestão Comercial:</strong></h4>
              </div>
              <Outlet /><br/>            
          <div className='d-flex justify-content-center align-items-center vh-100'>       
            <div className='bg-white p-4 rounded w-30 border' style={{fontFamily:'arial'}}>
             <h4><center>Calcular Troco:</center></h4><br /> 
              <form action=''>
                 <div className='mb-3'>      
                    <label htmlFor='total' style={{fontSize:'20px', margin:'0 115px'}}>Total:</label>
                    <input type='decimal' onKeyUp={MostraTotal} placeholder='Entre com o total:' value={total} onChange={e => totalchange(e.target.value)} style={{fontSize:'20px', width:200, margin:'0 115px'}} className='form-control rounded-0' name='total' id='total'/>
                 </div>
                 <div className='mb-3'>      
                    <label htmlFor='valorpago' style={{fontSize:'20px', margin:'0 115px'}}>Valor Pago:</label>
                    <input type='decimal' onKeyUp={MostraValorPago} placeholder='Entre com o valorpago:' value={valorpag} onChange={e => valorpagchange(e.target.value)} style={{fontSize:'20px', width:240, margin:'0 115px'}} className='form-control rounded-0' name='valorpag' id='valorpag'/>
                 </div>
                 
                 <div className='mb-3'>
                 <Link className="btn border rounded-0" style={{color: 'white', backgroundColor:'blue', fontSize:'16px', width:100, margin:'0 115px'}} onClick={calcular}>Troco:</Link>
                 
                 </div> 
                <ToastContainer />                
             </form><br />
             <strong style={{fontSize:'45px', margin:'0 100px'}}>Troco:</strong> 
             <strong><span id="troco" style={{margin:'0 -60px', color:'Lime', fontSize:'50px'}}></span></strong>
          </div>    
      
         </div>
 
   
        </div>           
</div>
</div>

  )
}

export default VendaTroco