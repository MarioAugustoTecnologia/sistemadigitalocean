import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const CadDespesas = () => {


  const [nome, nomechange] = useState("")
  const [custo, custochange] = useState("")
  const [datapag, datapagchange] = useState("")

  const isValidate = () => {
    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"

    if (nome === null || nome === '') {
      document.getElementById('nome').style.borderColor = 'red';
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }
    if (custo === null || custo === '') {
      document.getElementById('custo').style.borderColor = 'red';
      isproceed = false
      // errormessage += 'Email:' 
    }


    if (!isproceed) {
      toast.warning(errormessage)
    }

    return isproceed
  }

  //console.log(data_cadastro);


  const cadastrar = (e) => {

    e.preventDefault();

    if (datapag !== '' || datapag !== null) {

      const dataInput = datapag;
      const data = new Date(dataInput);
      const data_pgto = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

      const data2 = new Date();
      const data_cad = data2.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      const total = custo;

      const cadobj = { nome, custo, data_pgto, data_cad, total }
      //console.log(cadobj)  

      if (isValidate()) {

        Swal.fire({
          title: "Deseja salvar ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Salvar",
          denyButtonText: `Não salvar`
        }).then((result) => {

          if (result.isConfirmed) {

            fetch("http://localhost:3000/despesas", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(cadobj)
            }).then((res) => {
              toast.success('Cadastrado com Sucesso !')
              nomechange('')
              custochange('')
              datapagchange('')

            }).catch((err) => {
              toast.error('Erro ! :' + err.message)
            })

          }
          else if (result.isDenied) {
            Swal.fire("Nada salvo", "", "info");
          }
        })
      }
    } else {
      const data2 = new Date();
      const data_cad = data2.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      const total = custo;

      const cadobj = { nome, custo, data_cad, total }
      //console.log(cadobj)  

      if (isValidate()) {

        Swal.fire({
          title: "Deseja salvar ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Salvar",
          denyButtonText: `Não salvar`
        }).then((result) => {

          if (result.isConfirmed) {

            fetch("http://localhost:3000/despesas", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(cadobj)
            }).then((res) => {
              toast.success('Cadastrado com Sucesso !')
              nomechange('')
              custochange('')

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
  }

  function MostraNome() {
    document.getElementById('nome').style.borderColor = 'GainsBoro'
  }


  function MostraCusto() {
    document.getElementById('custo').style.borderColor = 'GainsBoro'
  }

  const logout = () => {
    localStorage.clear()
    console.clear();

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
          <div className="p-2 d-flex justify-content-center shadow text-white" style={{ backgroundColor: 'blue' }}>
            <h4><strong>Sistema de Gestão Comercial:</strong></h4>
          </div>
          <Outlet /><br />

          <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='bg-white p-4 rounded w-50 border'>
              <h4><center>Cadastrar Despesa:</center></h4><br />
              <form action='' onSubmit={cadastrar}>

                <div className='mb-3'>
                  <label htmlFor='nome' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                  <input type='text' onKeyUp={MostraNome} id='nome' placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{ fontSize: '20px', width: 370, margin: '0 115px' }} className='form-control rounded-0' name='nome' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='custo' style={{ fontSize: '20px', margin: '0 115px' }}>Custo:</label>
                  <input type="decimal" onKeyUp={MostraCusto} id='custo' value={custo} onChange={e => custochange(e.target.value)} style={{ fontSize: '20px', width: 200, margin: '0 115px' }} placeholder='Entre com o custo:' className='form-control rounded-0' name='custo' />

                </div>

                <div className='mb-3'>
                  <label htmlFor='datapagamento' style={{ fontSize: '20px', margin: '0 115px' }}>Data de Pagamento:</label>
                  <input type='date' value={datapag} onChange={e => datapagchange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='datapag' />
                </div>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-success border rounded-0' style={{ width: 100, margin: '0 115px', fontSize: '16px' }} >Cadastrar:</button>
                  <Link to='/despesas' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'orange', margin: '0 -90px', fontSize: '16px', width: 100 }}>Voltar:</Link>
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

export default CadDespesas