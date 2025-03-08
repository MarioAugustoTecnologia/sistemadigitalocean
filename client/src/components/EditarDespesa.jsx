import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const EditarDespesa = () => {

  const { despesacod } = useParams()

  useEffect(() => {
    fetch("http://localhost:3000/despesas/" + despesacod).then((res) => {
      return res.json();
    }).then((resp) => {
      idchange(resp.id);
      nomechange(resp.nome);
      custochange(resp.custo);
      datapagchange(resp.data_pgto);

    }).catch((err) => {
      console.log(err.message);
    })
  }, []);


  const [id, idchange] = useState("")
  const [nome, nomechange] = useState("")
  const [custo, custochange] = useState("")
  const [datapgto, datapagchange] = useState("")



  const isValidate = () => {
    let isproceed = true
    let errormessage = "Campos não podem estar vazio  !"
    if (id === null || id === '') {
      document.getElementById('id').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Nome:' 
    }

    if (nome === null || nome === '') {
      document.getElementById('nome').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }
    if (custo === null || custo === '') {
      document.getElementById('custo').style.borderColor = 'red'
      isproceed = false
      // errormessage += 'Email:' 
    }

    if (datapgto === null || datapgto === '') {
      isproceed = false
      // errormessage += 'Salario:' 
    }
    if (!isproceed) {
      toast.warning(errormessage)
    }

    return isproceed
  }


  const editar = (e) => {

    e.preventDefault();


    if (isValidate()) {

      const dataInput = datapgto;

      const data = new Date(dataInput);
      const data_pgto = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

      const data2 = new Date();
      const data_cad = data2.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      const total = custo;

      const edtobj = { id, nome, custo, data_pgto, total, data_cad }

      Swal.fire({
        title: "Deseja salvar ?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Salvar",
        denyButtonText: `Não salvar`
      }).then((result) => {

        if (result.isConfirmed) {

          fetch("http://localhost:3000/despesas/" + despesacod, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(edtobj)
          }).then((res) => {
            toast.success('Atualizado com sucesso !')
            idchange('');
            nomechange('');
            custochange('');
            datapagchange('');

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

  function MostraId() {
    document.getElementById('id').style.borderColor = 'GainsBoro'

  }


  function MostraNome() {
    document.getElementById('nome').style.borderColor = 'GainsBoro'

  }

  function MostraPreco() {
    document.getElementById('custo').style.borderColor = 'GainsBoro'

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
            <div className='bg-white p-4 rounded w-50 border'>
              <h4><center>Editar Despesa:</center></h4><br />
              <form action='' onSubmit={editar}>
                <div className='mb-3'>
                  <label htmlFor='id' style={{ fontSize: '20px', margin: '0 115px' }}>Id:</label>
                  <input type='number' onSelect={MostraId} id="id" value={id} onChange={e => idchange(e.target.value)} style={{ fontSize: '20px', width: 80, margin: '0 115px' }} className='form-control rounded-0' name='id' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='nome' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                  <input type='text' onKeyUp={MostraNome} id='nome' placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{ fontSize: '20px', width: 370, margin: '0 115px' }} className='form-control rounded-0' name='nome' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='preco' style={{ fontSize: '20px', margin: '0 115px' }}>Preço:</label>
                  <input type="decimal" onKeyUp={MostraPreco} id="custo" value={custo} onChange={e => custochange(e.target.value)} style={{ fontSize: '20px', width: 200, margin: '0 115px' }} placeholder='Entre com o preço:' className='form-control rounded-0' name='custo' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='datacadastro' style={{ fontSize: '20px', margin: '0 115px' }}>Data de Pagamento:</label>
                  <input type='date' value={datapgto} onChange={e => datapagchange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='data_pgto' />
                </div>
                <div className="mb-3">
                  <button type='submit' className='btn btn-success border rounded-0' style={{ width: 100, margin: '0 115px', fontSize: '16px' }} >Atualizar:</button>
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

export default EditarDespesa