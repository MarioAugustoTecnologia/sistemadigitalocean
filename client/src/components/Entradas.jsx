import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';



const Entradas = () => {

  const [vendasdata, setVendasdata] = useState([])

  useEffect(() => {

    fetch("http://localhost:3000/vendas").then((res) => {

      return res.json()

    }).then((resp) => {

      setVendasdata(resp)

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

  const deleteall = (id) => {

    Swal.fire({
      title: "Deseja Excluir ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Excluir",
      denyButtonText: `Não Excluir`
    }).then((result) => {

      if (result.isConfirmed) {


        for (let id = 0; id <= vendasdata.length; id++) {

          fetch("http://localhost:3000/vendas/" + id, {

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
        <div className="col p-0 m-0" style={{ fontFamily: 'arial' }}>
          <div className="p-2 d-flex justify-content-center shadow text-white" style={{ backgroundColor: 'blue', width: '115%' }}>
            <h4><strong style={{ fontFamily: 'arial', margin: '0 600px ' }}>Sistema de Gestão Comercial:</strong></h4>
          </div>
          <Outlet />
          <div className="px-5 mt-5">
            <div className="mb3">
              <Link to="/produtos/codigo" className="btn" style={{ fontSize: '18px', fontFamily: 'arial', color: 'white', backgroundColor: 'orange' }}>Nova Venda:</Link>
              <Link to="/entradas/nome" className="btn" style={{ color: 'white', backgroundColor: 'green', margin: '0 25px', fontSize: '18px', fontFamily: 'arial' }}>Consulta por nome:</Link>
              <Link to="/entradas/data" className="btn" style={{ color: 'white', backgroundColor: 'yellowgreen', margin: '0 3px', fontSize: '18px', fontFamily: 'arial' }}>Consulta por data:</Link>
              <Link to="/entradas/mes" className="btn" style={{ color: 'white', backgroundColor: 'DarkSlateBlue', margin: '0 25px', fontSize: '18px', fontFamily: 'arial' }}>Consulta por mes:</Link>
              <Link to="/entradas/numero" className="btn" style={{ color: 'white', backgroundColor: 'DeepSkyBlue', margin: '0 2px', fontSize: '18px', fontFamily: 'arial' }}>Consulta por numero:</Link>
              <Link to="/entradas/ultima" className="btn" style={{ color: 'white', backgroundColor: 'Crimson', margin: '0 20px', fontSize: '18px', fontFamily: 'arial' }}>Ultima Venda:</Link>
              <Link className="btn" style={{ color: 'white', backgroundColor: 'red', margin: '0 5px', fontSize: '18px', fontFamily: 'arial' }} onClick={deleteall}>Excluir Todos:</Link>
            </div><br /><br />
            <div>
              <h4 className="h4"><strong className="strong" style={{ color: 'red', fontSize: '25px', textAlign: 'center', margin: '0 980px' }}>Entradas:</strong></h4>
              <br />
              <div className="mt-3">
                <table className="table" id="table" style={{ margin: '0 -30px', fontFamily: 'arial', fontSize: '20px', width: '120%' }}>
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
                      vendasdata.map(item => (
                        <tr key={item.id}>
                          <td className="td">{item.id}</td>
                          <td className="td">{item.vendan}</td>
                          <td className="td">{item.nome}</td>
                          <td className="td">{item.quant}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.preco)}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.total)}</td>
                          <td className="td">{item.formapag}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.valorpag)}</td>
                          <td className="td">{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(item.troco)}</td>
                          <td className="td">{item.parcelamento}</td>
                          <td className="td">{item.parcelan}</td>
                          <td className="td">{item.mes}</td>
                          <td className="td">{item.data}</td>

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
            </div><br />



          </div>

        </div>

      </div>
    </div>


  )
}

export default Entradas