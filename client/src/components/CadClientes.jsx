import React, { useState } from 'react';//5=> Criação do arquivo de Cadastro de Usuarios:
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const CadClientes = () => {

  const [nome, nomechange] = useState("")
  const [email, emailchange] = useState("")
  const [fone, fonechange] = useState("")
  const [endereco, enderecochange] = useState("")
  const [bairro, bairrochange] = useState("")
  const [cpf, cpfchange] = useState("")


  const isValidate = () => {
    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"
    if (nome === null || nome === '') {
      document.getElementById('nome').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Nome:' 
    }

    if (email === null || email === '') {
      document.getElementById('email').style.borderColor = 'red'
      isproceed = false
      // errormessage += 'Email:' 
    }

    if (fone === null || fone === '') {
      document.getElementById('fone').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Telefone:' 
    }

    if (bairro === null || bairro === '') {
      document.getElementById('bairro').style.borderColor = 'red'
      isproceed = false
      // errormessage += 'Categoria:' 
    }
    if (endereco === null || endereco === '') {
      document.getElementById('endereco').style.borderColor = 'red'
      isproceed = false
      // errormessage += 'Salario:' 
    }
    if (cpf === null || cpf === '') {
      document.getElementById('cpf').style.borderColor = 'red'
      isproceed = false
      // errormessage += 'Salario:' 
    }

    if (!isproceed) {
      toast.warning(errormessage)

    } else {
      if (/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

      } else {
        isproceed = false;
        toast.warning('Entre com um email valido !')
      }
    }
    return isproceed
  }


  function MostraNome() {
    document.getElementById('nome').style.borderColor = 'GainsBoro'
  }
  function MostraEmail() {
    document.getElementById('email').style.borderColor = 'GainsBoro'
  }
  function MostraFone() {
    document.getElementById('fone').style.borderColor = 'GainsBoro'
  }
  function MostraEndereco() {
    document.getElementById('endereco').style.borderColor = 'GainsBoro'
  }
  function MostraBairro() {
    document.getElementById('bairro').style.borderColor = 'GainsBoro'
  }
  function MostraCpf() {
    document.getElementById('cpf').style.borderColor = 'GainsBoro'
  }

  const data = new Date();
  const data_cad = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
  //console.log(datanascimento);

  const cadastrar = (e) => {

    e.preventDefault();

    const cadobj = { nome, email, fone, data_cad, bairro, endereco, cpf }

    if (isValidate()) {

      Swal.fire({
        title: "Deseja salvar ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: `Não salvar`
      }).then((result) => {

        if (result.isConfirmed) {

          fetch("http://localhost:3000/clientes", {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(cadobj)
          }).then((res) => {
            toast.success('Cadastrado com sucesso !')
            nomechange('')
            emailchange('')
            fonechange('')
            bairrochange('')
            enderecochange('')
            cpfchange('')

          }).catch((err) => {
            toast.error('Erro ! :' + err.message)
          })
        }
        else if (result.isDenied) {
          Swal.fire("Nada salvo", "", "info");
        }
      })
    }
  }

  const logout = () => {
    localStorage.clear()
    console.clear()

  }

  return (
    <div className="container-fluid" style={{ fontFamily: 'arial' }}>
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
                    Gestão de Despesas:
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
          <div className="p-2 d-flex justify-content-center shadow text-white" style={{ fontFamily: 'arial', backgroundColor: 'blue' }}>
            <h4><strong>Sistema de Gestão Comercial:</strong></h4>
          </div>
          <Outlet /><br />

          <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-4 rounded w-42 border'>
              <h4><center>Cadastrar Cliente:</center></h4><br />
              <form action='' onSubmit={cadastrar}>
                <div className='mb-3'>
                  <label htmlFor='id' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                  <input type='text' onKeyUp={MostraNome} placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{ fontSize: '20px', width: 400, margin: '0 115px' }} className='form-control rounded-0' name='nome' id='nome' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' style={{ fontSize: '20px', margin: '0 115px' }}>Email:</label>
                  <input type="email" onKeyUp={MostraEmail} id='email' value={email} onChange={e => emailchange(e.target.value)} style={{ fontSize: '20px', width: 330, margin: '0 115px' }} placeholder='Entre com o email:' className='form-control rounded-0' name='email' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='fone' style={{ fontSize: '20px', margin: '0 115px' }}>Telefone:</label>
                  <input type='text' onKeyUp={MostraFone} id='fone' value={fone} onChange={e => fonechange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} placeholder='Entre com o telefone:' className='form-control rounded-0' name='fone' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='endereco' style={{ fontSize: '20px', margin: '0 115px' }}>Endereço:</label>
                  <input type='text' onKeyUp={MostraEndereco} id='endereco' placeholder='Entre com o endereço:' value={endereco} onChange={e => enderecochange(e.target.value)} style={{ fontSize: '20px', width: 400, margin: '0 115px' }} className='form-control rounded-0' name='endereco' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='bairro' style={{ fontSize: '20px', margin: '0 115px' }}>Bairro:</label>
                  <input type='text' onKeyUp={MostraBairro} placeholder='Entre com o bairro:' id='bairro' value={bairro} onChange={e => bairrochange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='bairro' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='cpf' style={{ fontSize: '20px', margin: '0 115px' }}>Cpf:</label>
                  <input type='text' onKeyUp={MostraCpf} placeholder='Entre com o cpf ' id='cpf' value={cpf} onChange={e => cpfchange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='cpf' />
                </div>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-success border rounded-0' style={{ width: 100, margin: '0 115px', fontSize: '16px' }} >Cadastrar:</button>
                  <Link to='/clientes' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'orange', margin: '0 -90px', fontSize: '16px', width: 100 }}>Voltar:</Link>
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

export default CadClientes