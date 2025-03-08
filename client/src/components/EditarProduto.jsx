import React, { useEffect, useState } from "react";
import { useParams, Link, Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';

const EditarProduto = () => {

  const { produtocod } = useParams()

  //const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/produtos/" + produtocod).then((res) => {
      return res.json();
    }).then((resp) => {
      idchange(resp.id);
      nomechange(resp.nome);
      precochange(resp.preco);
      //datacadchange(resp.data_cadastro);
      qtdchange(resp.qtd);
      codchange(resp.codigo);


    }).catch((err) => {
      console.log(err.message);
    })
  }, []);


  const [id, idchange] = useState("")
  const [nome, nomechange] = useState("") //=> Representa o registro, qual é o usuario.
  const [preco, precochange] = useState("")
  const [categoria, categoriachange] = useState([])
  const [datacad, datacadchange] = useState("")
  const [qtdcur, qtdchange] = useState("")
  const [entrada, entradachange] = useState("")
  const [codigo, codchange] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/catproduto").then((res) => {

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
    if (id === null || id === '') {
      isproceed = false
      //errormessage += 'Nome:' 
    }
    if (qtdcur === null || qtdcur === '') {
      isproceed = false
      //errormessage += 'Nome:' 
    }
    if (nome === null || nome === '') {
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }
    if (preco === null || preco === '') {
      document.getElementById('preco').style.borderColor = 'red';
      isproceed = false
      // errormessage += 'Email:' 
    }

    if (datacad === null || datacad === '') {
      document.getElementById('datacad').style.borderColor = 'red';
      isproceed = false

      // errormessage += 'Salario:' 
    }
    if (document.getElementById('categoria').value === null || document.getElementById('categoria').value === '') {
      document.getElementById('categoria').style.borderColor = 'red';
      isproceed = false

      // errormessage += 'Salario:' 
    }
    if (codigo === null || codigo === '') {
      isproceed = false
      // errormessage += 'Salario:' 
    }
    if (!isproceed) {
      toast.warning(errormessage)
    }

    return isproceed
  }

  function MudacorPreco() {
    document.getElementById('preco').style.borderColor = 'gainsboro';
  }

  function MudacorDataCad() {
    document.getElementById('datacad').style.borderColor = 'gainsboro';
  }

  function MudacorCat() {
    document.getElementById('categoria').style.borderColor = 'gainsboro';
  }


  const editar = (e) => {

    e.preventDefault();

    if (entrada === '' || entrada === null) {

      const dataInput = datacad;
      const data = new Date(dataInput);
      const data_cadastro = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      const qtd = qtdcur;
      const categoria = document.getElementById('categoria').value;
      const edtobj = { id, qtd, nome, preco, categoria, data_cadastro, codigo }
      //console.log(cadobj)  

      if (isValidate()) {

        Swal.fire({
          title: "Deseja salvar ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Salvar",
          denyButtonText: `Não Salvar`
        }).then((result) => {

          if (result.isConfirmed) {

            fetch("http://localhost:3000/produtos/" + produtocod, {
              method: "PUT",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(edtobj)
            }).then((res) => {
              toast.success('Atualizado com sucesso !')
              idchange('');
              qtdchange('');
              nomechange('');
              precochange('');
              datacadchange('');
              codchange('');

            }).catch((err) => {
              toast.error('Erro ! :' + err.message)
            })

          } else if (result.isDenied) {
            Swal.fire("Nada salvo", "", "info");
          }
        })
      }

    } else {

      const dataInput = datacad;
      const data = new Date(dataInput);
      const data_cadastro = data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
      let total = parseInt(qtdcur) + parseInt(entrada);
      const qtd = total;
      console.log(qtd);
      const catproduto = document.getElementById('categoria').value;
      const edtobj = { id, qtd, nome, preco, catproduto, data_cadastro, codigo }
      //console.log(cadobj)  

      if (isValidate()) {

        Swal.fire({
          title: "Deseja salvar ?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Salvar",
          denyButtonText: `Não Salvar`
        }).then((result) => {

          if (result.isConfirmed) {

            fetch("http://localhost:3000/produtos/" + produtocod, {
              method: "PUT",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(edtobj)
            }).then((res) => {
              toast.success('Atualizado com Sucesso !')
              idchange('');
              qtdchange('')
              nomechange('')
              precochange('')
              datacadchange('')
              entradachange('')
              codchange('')
    
            }).catch((err) => {
              toast.error('Erro ! :' + err.message)
            })
    


          } else if (result.isDenied) {
            Swal.fire("Nada salvo", "", "info");
          }
        })

       
      }

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
            <div className='bg-white p-4 rounded w-50 border'>
              <h4><center>Editar Produto:</center></h4><br />
              <form action='' onSubmit={editar}>
                <div>
                  <label htmlFor='id' style={{ fontSize: '20px', margin: '0 115px' }}>Id:</label>
                  <label htmlFor='estoque' style={{ fontSize: '20px', margin: '0 -12px' }}>Estoque:</label>
                  <label htmlFor='entrada' style={{ fontSize: '20px', margin: '0 70px' }}>Entrada:</label>

                </div>
                <div>
                  <input type='number' value={id} onChange={e => idchange(e.target.value)} style={{ fontSize: '20px', width: 70, margin: '0 115px' }} name='id' />
                  <input type='number' value={qtdcur} onChange={e => qtdchange(e.target.value)} style={{ fontSize: '20px', width: 100, margin: '0 -60px' }} name='estoque' />
                  <input type='number' value={entrada} onChange={e => entradachange(e.target.value)} style={{ fontSize: '20px', width: 100, margin: '0 376px', marginTop: '-42px' }} className='form-control rounded-0' name='entrada' />
                </div><br />
                <div className="mb-3">
                  <label htmlFor='cod' style={{ fontSize: '20px', margin: '0 115px' }}>Codigo de Venda:</label>
                  <input type='text' placeholder='Entre com o codigo:' value={codigo} onChange={e => codchange(e.target.value)} style={{ fontSize: '20px', width: 100, margin: '0 115px' }} className='form-control rounded-0' name='codigo' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='nome' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                  <input type='text' placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{ fontSize: '20px', width: 500, margin: '0 115px' }} className='form-control rounded-0' name='nome' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='preco' style={{ fontSize: '20px', margin: '0 115px' }}>Preço:</label>
                  <input type="decimal" onKeyUp={MudacorPreco} value={preco} onChange={e => precochange(e.target.value)} style={{ fontSize: '20px', width: 200, margin: '0 115px' }} placeholder='Entre com o preço:' className='form-control rounded-0' name='preco' id="preco" />

                </div>

                <div className='mb-3'>
                  <label htmlFor='categoria' className='form-label' style={{ fontSize: '20px', margin: '0 115px' }}>
                    Categoria:
                  </label>
                  <select onSelect={MudacorCat} style={{ fontSize: '20px', width: 280, margin: '0 115px' }} name='categoria' id='categoria' className='form-select' onChange={(e) => setValues({ ...values, id: e.target.value })}>
                    <option value=""></option>
                    {categoria.map(val => {
                      return <option value={val.nome}>{val.nome}</option>
                    })}

                  </select>
                </div>

                <div className='mb-3'>
                  <label htmlFor='datacadastro' style={{ fontSize: '20px', margin: '0 115px' }}>Data de Cadastro:</label>
                  <input type='date' onSelect={MudacorDataCad} value={datacad} onChange={e => datacadchange(e.target.value)} style={{ fontSize: '20px', width: 225, margin: '0 115px' }} className='form-control rounded-0' name='datacad' id="datacad" />

                </div>
                <div className="mb-3">
                  <button type='submit' className='btn btn-success border rounded-0' style={{ width: 100, margin: '0 115px', fontSize: '16px' }} >Atualizar:</button>
                  <Link to='/produtos' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'orange', margin: '0 -75px', fontSize: '16px', width: 100 }}>Voltar:</Link>
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

export default EditarProduto