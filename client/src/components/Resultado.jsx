import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const Resultado = () => {

  const [result, setResult] = useState([])


  useEffect(() => {

    fetch("http://localhost:3000/resultados", {

      method: "GET",
      headers: { 'content-type': 'application/json' }
    }

    ).then((res) => {

      return res.json()

    }).then((resp) => {

      setResult(resp)

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

        fetch("http://localhost:3000/resultados/" + id, {

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

  const deleteall = (id) => {

    Swal.fire({
      title: "Deseja Excluir ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Excluir",
      denyButtonText: `Não Excluir`
    }).then((result) => {

      if (result.isConfirmed) {

        for (let id = 0; id <= result.length; id++) {

          fetch("http://localhost:3000/resultados/" + id, {
    
            method: "DELETE"
    
          }).then((res) => {
    
            window.location.reload();
            //toast.success('Excluido com sucesso !')    
    
          }).catch((err) => {
            toast.error('Erro ! :' + err.message)
          })
    
        }

      } else if (result.isDenied) {
        Swal.fire("Nada excluido", "", "info");
      }
    });


  }

  const logout = () => {
    localStorage.clear()
    console.clear();

  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary" style={{ fontFamily: 'arial', fontSize: '19px' }}>
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to=""
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
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

              <li className="w-100" onClick={logout}>
                <Link
                  to="/"
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
            <h4><strong style={{ fontFamily: 'arial', margin: '0 600px ' }}>Sistema de Gestão Comercial:</strong></h4>
          </div>
          <Outlet />
          <div className="px-5 mt-5">
            <div>
              <h4 className="h4" ><strong className="strong" style={{ color: 'red', margin: '0 680px', fontSize: '25px' }}>Resultados:</strong></h4>
              <br />
              <div className="mt-3">
                <table className="table" id="table" style={{ margin: '0 -30px', fontFamily: 'arial', fontSize: '20px' }}>
                  <thead>
                    <tr>
                      <th className="th" scope="col">Id:</th>
                      <th className="th" scope="col">Total das Entradas:</th>
                      <th className="th" scope="col">Total das Saidas:</th>
                      <th className="th" scope="col">Resultado:</th>
                      <th className="th" scope="col">Mês:</th>
                      <th className="th" scope="col">Data de Cadastro:</th>
                      <th className="th" scope="col">Ação:</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result &&
                      result.map(item => (
                        <tr key={item.id}>
                          <td className="td">{item.id}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.entradas)}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.saidas)}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.resultado)}</td>
                          <td className="td">{item.mes}</td>
                          <td className="td">{item.data_cad}</td>
                          <td className="td" >
                            <button className="excluir" onClick={() => { handleDelete(item.id) }} style={{ color: 'white', backgroundColor: 'red', border: 'none', borderRadius: '5px' }}>Excluir:</button>
                          </td>

                        </tr>
                      ))

                    }

                  </tbody>
                  <ToastContainer />

                </table>






              </div>
            </div><br /><br />
            <div className="mb3">
              <Link to="/cadresultado" className="btn" style={{ fontSize: '18px', fontFamily: 'arial', color: 'white', backgroundColor: 'green' }}>Novo Resultado:</Link>
              <Link to="/resultado/gerarpdf" className="btn" style={{ fontSize: '18px', fontFamily: 'arial', color: 'white', backgroundColor: 'Crimson', width: '11%', margin: '0 20px' }}>Gerar Pdf:</Link>
              <Link className="btn" style={{ color: 'white', backgroundColor: 'red', margin: '0 5px', fontSize: '18px', fontFamily: 'arial' }} onClick={deleteall}>Excluir Todos:</Link>
            </div>


          </div>

        </div>

      </div>
    </div>


  )
}

export default Resultado