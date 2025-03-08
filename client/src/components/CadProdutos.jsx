import React, {useState, useEffect} from 'react';//5=> Criação do arquivo de Cadastro de Usuarios:
import { Link, Outlet, useParams} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const CadProdutos = () => {

  const {compracod} = useParams()

  useEffect(() => {
    fetch("http://localhost:3000/compras/" + compracod).then((res) => {
        return res.json();
    }).then((resp) => {
      idchange(resp.id);
      nomechange(resp.nome);
      precochange(resp.preco);     
      qtdchange(resp.qtd);
       
    }).catch((err) => {
        console.log(err.message);
    })
}, []);

  
  const [id, idchange] = useState("") 
  const [nome, nomechange] = useState("") 
  const [preco, precochange] = useState("")
  const [catprod, catprodchange] = useState([])
  const [datacad, datacadchange] = useState("")
  const [qtd, qtdchange] = useState("")
  const [codigo, codigochange] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/catproduto").then((res) => {

      return res.json()
  
      }).then((resp) => {
  
        catprodchange(resp)
  
      }).catch((err) => {
        console.log(err.message)
      }) 

  }, [])  

  const [values, setValues] = useState({
    id:''            
  })

  const isValidate = () => {   

    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"

    if(qtd === null || qtd === ''){
      isproceed = false
      //errormessage += 'Nome:' 
    }
    if(nome === null || nome === ''){
      document.getElementById('nome').style.borderColor = 'red';
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }

    if(preco === null || preco === ''){
      document.getElementById('preco').style.borderColor = 'red';
      isproceed = false
     // errormessage += 'Email:' 
    }
  
    if(datacad === null || datacad === ''){
      isproceed = false
      document.getElementById('datacad').style.borderColor = 'red';
      //errormessage += 'Telefone:' 
    }
    if(codigo === null || codigo === ''){
      document.getElementById('codigo').style.borderColor = 'red';
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if(document.getElementById('categoria').value === null || document.getElementById('categoria').value === ''){
      document.getElementById('categoria').style.borderColor = 'red';
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if(!isproceed){
      toast.warning(errormessage)
  
    }
    
    
    return isproceed
   }

//console.log(data_cadastro);
function MudaCorCodigo(){
  document.getElementById('codigo').style.borderColor = 'Gainsboro'
}

function MudaCorData(){
  document.getElementById('datacad').style.borderColor = 'Gainsboro'
}

function MudaCorPreco(){
  document.getElementById('preco').style.borderColor = 'Gainsboro'
}

function MudaCorNome(){
  document.getElementById('nome').style.borderColor = 'Gainsboro'
}

 const cadastrar = (e) => { 

    e.preventDefault(); 
   
      
      const dataInput = datacad;
      const data = new Date(dataInput);
      const data_cadastro = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'}); 
      const categoria = document.getElementById('categoria').value;    
     
      const cadobj = {qtd, nome, preco, categoria, data_cadastro, codigo}
    //console.log(cadobj)  

    if(isValidate()){

         Swal.fire({
                        title: "Deseja salvar ?",
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: "Salvar",
                        denyButtonText: `Não salvar`
                      }).then((result) => {
                                
                        if (result.isConfirmed) {

                            fetch("http://localhost:3000/produtos", {
                              method: "POST",
                              headers: {'content-type':'application/json'},
                              body: JSON.stringify(cadobj)
                              }).then((res) => {        
                               toast.success('Cadastrado com Sucesso !')      
                               qtdchange('')
                               nomechange('')
                               precochange('')   
                               datacadchange('') 
                               codigochange('')        
       
                              }).catch((err) => {
                              toast.error('Erro ! :' +err.message)
                          })                                           
                                                
                        } else if (result.isDenied) {
                          Swal.fire("Nada salvo", "", "info");
                        }
                      });
   
       
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
          <div className='bg-white p-4 rounded w-50 border'>
             <h4><center>Cadastrar Produto:</center></h4><br /> 

            <form action='' onSubmit={cadastrar}>
               <div className='mb-3'>
               <label htmlFor='estoque' style={{fontSize:'20px', margin:'0 115px'}}>Estoque:</label>
               <label htmlFor='id' style={{fontSize:'20px', margin:'0 -42px'}}>Id:</label> 
               <label htmlFor='cod' style={{fontSize:'20px', margin:'0 153px'}}>Codigo de Venda:</label> 
               <input type='number' value={qtd} onChange={e => qtdchange(e.target.value)} style={{fontSize:'20px', width:100, margin:'0 115px'}} className='form-control rounded-0' name='estoque'/>
               <input type='number' value={id} onChange={e => idchange(e.target.value)} style={{fontSize:'20px', width:100, margin:'0 260px', marginTop:'-43px'}} className='form-control rounded-0' name='id'/>
               <input type='text' onKeyUp={MudaCorCodigo} value={codigo} onChange={e => codigochange(e.target.value)} style={{fontSize:'20px', width:100, margin:'0 400px', marginTop:'-43px'}} className='form-control rounded-0' name='codigo' id='codigo'/>             
               </div>        
               <div className='mb-3'>      
               <label htmlFor='nome' style={{fontSize:'20px', margin:'0 115px'}}>Nome:</label>
               <input type='text' onKeyUp={MudaCorNome} placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{fontSize:'20px', width:580, margin:'0 115px'}} className='form-control rounded-0' name='nome' id='nome'/>                   
               </div>           
               <div className='mb-3'>           
               <label htmlFor='preco' style={{fontSize:'20px', margin:'0 115px'}}>Preço:</label>
               <input type="decimal" onKeyUp={MudaCorPreco} value={preco} onChange={e => precochange(e.target.value)} style={{fontSize:'20px', width:200, margin:'0 115px'}} placeholder='Entre com o preço:' className='form-control rounded-0' name='preco' id='preco'/>
               </div>           
               <div className='mb-3'>
                  <label htmlFor='categoria' className='form-label' style={{fontSize:'20px', margin:'0 115px'}}>
                    Categoria: 
                  </label>
                  <select style={{fontSize:'20px', width:280, margin:'0 115px'}} name='catprod' id='categoria' className='form-select' onChange={(e) => setValues({...values, id: e.target.value})}>
                     <option value=""></option>  
                        {catprod.map(val =>{
                            return <option value={val.nome}>{val.nome}</option>
                          })}      
                  </select>  
             </div>          
             <div className='mb-3'>           
                <label htmlFor='datacadastro' style={{fontSize:'20px', margin:'0 115px'}}>Data de Cadastro:</label>
                <input type='date' onKeyUp={MudaCorData} onSelect={MudaCorData} value={datacad} onChange={e => datacadchange(e.target.value)} style={{fontSize:'20px', width:225, margin:'0 115px'}} className='form-control rounded-0' name='datacad' id='datacad'/>              
             </div>          
             <div className='mb-3'>
             <button type='submit' className='btn btn-success border rounded-0' style={{width:100, margin:'0 115px', fontSize:'16px'}} >Cadastrar:</button>
              <Link to='/produtos'  className="btn border rounded-0" style={{color: 'white', backgroundColor:'SlateBlue', margin: '0 -90px', fontSize:'16px', width:100}}>Produtos:</Link>
              <Link to='/compras'  className="btn border rounded-0" style={{color: 'white', backgroundColor:'orange', margin: '0 115px', fontSize:'16px', width:100}}>Voltar:</Link>
             </div>
             <ToastContainer />                
         </form>
       </div>  
      </div>                            
</div>           
</div>
</div>

  )
}

export default CadProdutos