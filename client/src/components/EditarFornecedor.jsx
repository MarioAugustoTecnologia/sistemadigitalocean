import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const EditarFornecedor = () => {

    const { forcod } = useParams()

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/fornecedor/" + forcod).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            nomechange(resp.nome);
            enderecochange(resp.endereco);
            numerochange(resp.numero);
            compchange(resp.comp)
            cepchange(resp.cep);
            cidadechange(resp.cidade);
            emailchange(resp.email);
            fonechange(resp.fone);           
            //categoriachange(resp.categoria)       

        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [id, idchange] = useState("") 
    const [nome, nomechange] = useState("") 
    const [endereco, enderecochange] = useState("")
    const [categoria, categoriachange] = useState([])   
    const [numero, numerochange] = useState("")
    const [comp, compchange] = useState("")
    const [cep, cepchange] = useState("")
    const [cidade, cidadechange] = useState("")
    const [email, emailchange] = useState("")
    const [fone, fonechange] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/catfornecedor").then((res) => {
    
          return res.json()
    
        }).then((resp) => {
    
          categoriachange(resp)
    
        }).catch((err) => {
          console.log(err.message)
        })
      }, [])

    const [values, setValues] = useState({
        id: ''
      })

const isValidate = () => {
    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"   

    if (nome === null || nome === '') {
      document.getElementById('nome').style.borderColor='red';
      isproceed = false
      //errormessage += 'Nome:' 
    }
    if (endereco === null || endereco === '') {
      document.getElementById('endereco').style.borderColor='red';
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }
    if (cep === null || cep === '') {
      document.getElementById('cep').style.borderColor='red';
      isproceed = false
      // errormessage += 'Email:' 
    }
    if (cidade === null || cidade === '') {
      document.getElementById('cidade').style.borderColor='red';
      isproceed = false
      // errormessage += 'Senha:' 
    }
    if (document.getElementById('categoria').value === null || document.getElementById('categoria').value  === '') {
        document.getElementById('categoria').style.borderColor='red';
        isproceed = false
        // errormessage += 'Senha:' 
      }
    
    

    if (!isproceed) {
      toast.warning(errormessage)

    } else {
      if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

      } else {
        isproceed = false;
        toast.warning('Entre com um email valido !')
        document.getElementById('email').style.borderColor='red';
 
      }
    }
    if(isproceed){      

      if (/^[a-zA-Z\u00C0-\u00FF]+/i.test(nome)) {

      } else {
        isproceed = false;
        toast.warning('Entre com um nome valido !')
        document.getElementById('nome').style.borderColor='red';
 
      }

    }
    if(isproceed){      

      if (/^[a-zA-Z-/0-9\u00C0-\u00FF ]+/i.test(endereco)) {

      } else {
        isproceed = false;
        toast.warning('Entre com um endereço valido !')
        document.getElementById('endereco').style.borderColor='red';
 
      }

    }
    if(isproceed){      

      if (/^[0-9-]+$/.test(cep)) {

      } else {
        isproceed = false;
        toast.warning('Entre com um cep valido !')
        document.getElementById('cep').style.borderColor='red';
 
      }

    }
    if(isproceed){      

      if (/^[a-zA-Z\u00C0-\u00FF ]+/i.test(cidade)) {

      } else {
        isproceed = false;
        toast.warning('Entre com uma cidade valida !')
        document.getElementById('cidade').style.borderColor='red';
 
      }

    }
    if(isproceed){      

      if (/^[0-9-() ]+$/.test(fone)) {

      } else {
        isproceed = false;
        toast.warning('Entre com um telefone valido !')
        document.getElementById('fone').style.borderColor='red';
 
      }

    }
   
    return isproceed


  }

    function mudacor(){
        //Ação de muda cor
        document.getElementById('nome').style.borderColor='Gainsboro';
      
    }


    function mudacorEnd(){

        document.getElementById('endereco').style.borderColor='Gainsboro';
      
      }
      function mudacorCep(){
      
        document.getElementById('cep').style.borderColor='Gainsboro';
      
      }
      function mudacorCidade(){
      
        document.getElementById('cidade').style.borderColor='Gainsboro';
      
      }
      
      function mudacorEmail(){
      
        document.getElementById('email').style.borderColor='Gainsboro';
      
      }
      
      function mudacorFone(){
      
        document.getElementById('fone').style.borderColor='Gainsboro';
      
      }
      function mudacorNumero(){
      
        document.getElementById('numero').style.borderColor='Gainsboro';
        document.getElementById('comp').style.borderColor='Gainsboro';
      }
      function mudacorComp(){
      
        document.getElementById('comp').style.borderColor='Gainsboro';
        document.getElementById('numero').style.borderColor='Gainsboro';
      
      }



    const editar = (e) => {

        e.preventDefault();

           if (isValidate()) {

                     Swal.fire({
                                title: "Deseja salvar ?",
                                showDenyButton: true,
                                showCancelButton: true,
                                confirmButtonText: "Salvar",
                                denyButtonText: `Não Salvar`
                                }).then((result) => {
                                     
                                if (result.isConfirmed) {
                                    const catforn = document.getElementById('categoria').value;              
                                    const data = new Date();
                                    const datacad = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                                    const edtobj = { nome, endereco, comp, cep, cidade, email, fone, datacad, catforn, numero }
                            
                                    fetch("http://localhost:3000/fornecedor/" + forcod, {
                                      method: "PUT",
                                      headers: { 'content-type': 'application/json' },
                                      body: JSON.stringify(edtobj)
                                    }).then((res) => {
                                      toast.success('Atualizado com sucesso !')
                                      nomechange('');
                                      enderecochange('');
                                      numerochange('');
                                      compchange('');
                                      cepchange('');
                                      cidadechange('');
                                      emailchange('');
                                      fonechange('');
                      
                                      document.getElementById('nome').style.borderColor='Gainsboro';
                                      document.getElementById('endereco').style.borderColor='Gainsboro';
                                      document.getElementById('cep').style.borderColor='Gainsboro';
                                      document.getElementById('cidade').style.borderColor='Gainsboro';
                                      document.getElementById('email').style.borderColor='Gainsboro';
                                      document.getElementById('fone').style.borderColor='Gainsboro';
                                      document.getElementById('comp').style.borderColor='Gainsboro';
                                      document.getElementById('numero').style.borderColor='Gainsboro';
                
                                    }).catch((err) => {
                                      toast.error('Erro ! :' + err.message)
                                    }) 

                                }else if (result.isDenied) {
                                   Swal.fire("Nada salvo", "", "info");
                                }
                                })           
                                 
             
      
                            }

 }

    const logout = () => {
        localStorage.clear()
        console.clear();
    }


    return (
        <div className="container-fluid loginpage" style={{ fontFamily: 'arial' }}>
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary" style={{ fontFamily: 'arial', fontSize: '19px' }}>
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
                    <div className="p-2 d-flex justify-content-center shadow text-white" style={{ backgroundColor: 'blue' }}>
                        <h4><strong>Sistema de Gestão Comercial:</strong></h4>
                    </div>
                    <Outlet />

                    <br />
                    <div className='d-flex justify-content-center align-items-center vh-100'>
                        <div className='bg-white p-4 rounded border'>
                            <h4><center>Editar Fornecedor:</center></h4><br />
                            <form action='' onSubmit={editar}>
                                <div className='mb-3'>
                                    <label htmlFor='nome' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                                    <input type='text' placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} onKeyUp={mudacor} style={{ fontSize: '20px', width: 400, margin: '0 115px' }} className='form-control rounded-0' name='nome' id="nome" />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='endereco' style={{ fontSize: '20px', margin: '0 115px' }}>Endereço:</label>
                                    <input type="text" value={endereco} onChange={e => enderecochange(e.target.value)} onKeyUp={mudacorEnd} style={{ fontSize: '20px', width: 640, margin: '0 115px' }} placeholder='Entre com o endereço:' className='form-control rounded-0' name='endereco' id="endereco" />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='numero' style={{ fontSize: '20px', margin: '0 115px' }}>Numero:</label>
                                    <label htmlFor='catforn' style={{ fontSize: '20px', margin: '0 -52px' }}>Categoria:</label>
                                    <input type='number' value={numero} onChange={e => numerochange(e.target.value)} onKeyUp={mudacorNumero} style={{ width: 100, margin: '0 115px', fontSize: '20px' }} className='form-control rounded-0' name='numero' id="numero" />
                                    <select style={{ width: 300, margin: '0 250px', marginTop: '-42px', fontSize: '20px' }} className='form-select' name='categoria' id='categoria' onChange={(e) => setValues({ ...values, id: e.target.value })} >
                                        <option value=""></option>
                                        {categoria.map(val => {
                                            return <option value={val.nome}>{val.nome}</option>
                                        })}
                                    </select>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='comp' style={{ fontSize: '20px', margin: '0 115px' }}>Complemento:</label>
                                    <input type='text' value={comp} onChange={e => compchange(e.target.value)} onKeyUp={mudacorComp} style={{ fontSize: '20px', width: 120, margin: '0 115px' }} className='form-control rounded-0' id="comp"/>

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='cep' style={{ fontSize: '20px', margin: '0 115px' }}>Cep:</label>
                                    <input type='text' placeholder='Entre com o cep:' value={cep} onChange={e => cepchange(e.target.value)} onKeyUp={mudacorCep} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='cep' id="cep" />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='cidade' style={{ fontSize: '20px', margin: '0 115px' }}>Cidade:</label>
                                    <input type='text' placeholder='Entre com a cidade:' value={cidade} onChange={e => cidadechange(e.target.value)} onKeyUp={mudacorCidade} style={{ fontSize: '20px', width: 350, margin: '0 115px' }} className='form-control rounded-0' name='cidade' id="cidade" />

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email' style={{ fontSize: '20px', margin: '0 115px' }}>Email:</label>
                                    <input type='email' placeholder='Entre com o email:' value={email} onChange={e => emailchange(e.target.value)} onKeyUp={mudacorEmail} style={{ fontSize: '20px', width: 320, margin: '0 115px' }} className='form-control rounded-0' name='email'  id="email"/>

                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='fone' style={{ fontSize: '20px', margin: '0 115px' }}>Telefone:</label>
                                    <input type='text' placeholder='Entre com o telefone:' value={fone} onChange={e => fonechange(e.target.value)} onKeyUp={mudacorFone} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='fone' id="fone" />

                                </div><br />
                                <div className='mb-3'>
                                    <button type='submit' className='btn btn-success border rounded-0' style={{ width: 100, margin: '0 115px', fontSize: '16px' }} >Atualizar:</button>
                                    <Link to='/fornecedores' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'orange', margin: '0 -90px', fontSize: '16px', width: 100 }}>Voltar:</Link>
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

export default EditarFornecedor