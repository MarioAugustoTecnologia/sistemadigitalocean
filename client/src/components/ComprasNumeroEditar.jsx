import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from 'sweetalert2';


const ComprasNumeroEditar = () => {

  const { compracod } = useParams()

  useEffect(() => {
    fetch("http://localhost:3000/compras/" + compracod).then((res) => {
      return res.json();
    }).then((resp) => {
      compranchange(resp.compran);
      nomechange(resp.nome);
      qtdchange(resp.qtd);
      precochange(resp.preco);
      totalchange(resp.total);
      meschange(resp.mes);
      formapagchange(resp.formapag);
      valorpagchange(resp.valorpag);
      trocochange(resp.troco);
      parcelamentochange(resp.parcelamento);
      parcelanchange(resp.parcelan);


    }).catch((err) => {
      console.log(err.message);
    })
  }, []);


  const [compran, compranchange] = useState("")
  const [nome, nomechange] = useState("")
  const [preco, precochange] = useState("")
  const [qtd, qtdchange] = useState("")
  const [total, totalchange] = useState("")
  const [valorpag, valorpagchange] = useState("")
  const [mes, meschange] = useState("")
  const [formapag, formapagchange] = useState("")
  const [troco, trocochange] = useState("")
  const [parcelamento, parcelamentochange] = useState("")
  const [parcela, parcelachange] = useState("")
  const [parcelan, parcelanchange] = useState("")
  const [forname, fornamechange] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/fornecedor").then((res) => {

      return res.json()

    }).then((resp) => {

      fornamechange(resp)

    }).catch((err) => {
      console.log(err.message)
    })
  }, [])

  const [values, setValues] = useState({
    id: ''
  })


  const isValidate = () => {
    let isproceed = true
    let errormessage = "Campos devem conter os dados corretos  !"

    if (nome === null || nome === '') {
      isproceed = false
      //errormessage += 'Nome Completo:' 
    }
    if (compran === null || compran === '') {
      isproceed = false
      // errormessage += 'Email:' 
    }

    if (preco === null || preco === '') {
      isproceed = false
      //errormessage += 'Telefone:' 
    }

    if (total === null || total === '') {
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if (valorpag === null || valorpag === '') {
      document.getElementById('valorpag').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Telefone:' 
    }

    if (mes === null || mes === '') {
      document.getElementById('mes').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if (formapag === null || formapag === '') {
      document.getElementById('formapag').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if (troco === null || troco === '') {
      document.getElementById('troco').style.borderColor = 'red'
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if (qtd === null || qtd === '') {
      isproceed = false
      //errormessage += 'Telefone:' 
    }
    if (document.getElementById('forname').value === null || document.getElementById('forname').value === '') {
      document.getElementById('forname').style.borderColor = 'red';
      isproceed = false
      //errormessage += 'Telefone:' 
    }

    if (!isproceed) {
      toast.warning(errormessage)
    }

    return isproceed
  }


  function formataData() {
    let data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'),
      ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  function MudaCorFor() {
    document.getElementById('forname').style.borderColor = 'GainsBoro';
  }

  function MudaCorForma() {
    document.getElementById('formapag').style.borderColor = 'GainsBoro';
  }

  function MudaCorMes() {
    document.getElementById('mes').style.borderColor = 'GainsBoro';
  }

  function MudaCorTroco() {
    document.getElementById('troco').style.borderColor = 'GainsBoro';
  }

  function MudaCorValorPag() {
    document.getElementById('valorpag').style.borderColor = 'GainsBoro';
  }


  const atualizar = (e) => {

    e.preventDefault();

    Swal.fire({
      title: "Deseja salvar ?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      denyButtonText: `Não salvar`
    }).then((result) => {

      if (result.isConfirmed) {


        if (parcelamento === "" || parcelamento === null && parcela === "" || parcela === null && parcelan === "" || parcelan === null) {

          const data_cad = formataData()


          if (valorpag > total) {

            const troco = document.getElementById('troco').value;
            const fornecedor = document.getElementById('forname').value;

            const edtobj = { nome, compran, preco, total, valorpag, mes, data_cad, formapag, qtd, troco, fornecedor }


            if (isValidate()) {

              fetch("http://localhost:3000/compras/" + compracod, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(edtobj)
              }).then((res) => {
                toast.success('Concluido com Sucesso !')
                nomechange('')
                compranchange('')
                precochange('')
                totalchange('')
                valorpagchange('')
                meschange('')

              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })

            }

          } else {

            const fornecedor = document.getElementById('forname').value;
            const edtobj = { nome, compran, preco, total, valorpag, mes, data_cad, formapag, qtd, troco, fornecedor }


            if (isValidate()) {

              fetch("http://localhost:3000/compras/" + compracod, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(edtobj)
              }).then((res) => {
                toast.success('Concluido com Sucesso !')
                nomechange('')
                compranchange('')
                precochange('')
                totalchange('')
                valorpagchange('')
                meschange('')

              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })

            }

          }
        } else if (parcelan == '1ª' && valorpag == 0) {

          const data_cad = formataData()


          const valorpag = parseFloat((total / parcela).toFixed(2));
          console.log(valorpag)
          const fornecedor = document.getElementById('forname').value;


          const edtobj = { nome, compran, preco, total, valorpag, mes, data_cad, parcelamento, parcelan, formapag, qtd, troco, fornecedor }


          if (isValidate()) {

            {
              fetch("http://localhost:3000/compras/" + compracod, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(edtobj)
              }).then((res) => {
                toast.success('Parcela Gerada com Sucesso !')

              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })

            }
          }


        } else if (parcelan == '1ª' && valorpag !== 0) {

          const data_cad = formataData()
          const fornecedor = document.getElementById('forname').value;


          const edtobj = { nome, compran, preco, total, valorpag, mes, data_cad, parcelamento, parcelan, formapag, qtd, troco, fornecedor }

          if (isValidate()) {

            {
              fetch("http://localhost:3000/compras/" + compracod, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(edtobj)
              }).then((res) => {
                toast.success('Concluido com Sucesso !')

              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })

            }
          }


        } else if (parcelan !== '1ª' && valorpag !== 0) {

          const data_cad = formataData()
          const fornecedor = document.getElementById('forname').value;


          const edtobj = { nome, compran, preco, total, valorpag, mes, data_cad, parcelamento, parcelan, formapag, qtd, troco, fornecedor }

          if (isValidate()) {

            {
              fetch("http://localhost:3000/compras/" + compracod, {
                method: "PUT",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(edtobj)
              }).then((res) => {
                toast.success('Concluido com Sucesso !')

              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })

            }
          }

        } else if (parcelan !== '1ª' && valorpag == 0) {

          const data_cad = formataData()

          const valorpag = parseFloat((total / parcela).toFixed(2));
          console.log(valorpag)
          const fornecedor = document.getElementById('forname').value;

          const cadobj = { nome, compran, preco, total, valorpag, mes, data_cad, parcelamento, parcelan, formapag, qtd, troco, fornecedor }

          if (isValidate()) {

            {
              fetch("http://localhost:3000/compras", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cadobj)
              }).then((res) => {
                toast.success('Parcela Gerada com Sucesso !')

              }).catch((err) => {
                toast.error('Erro ! :' + err.message)
              })

            }
          }

        }


      }
      else if (result.isDenied) {
        Swal.fire("Nada salvo", "", "info");
      }
    });



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
          <div className="p-2 d-flex justify-content-center shadow text-white" style={{ backgroundColor: 'blue' }}>
            <h4><strong>Sistema de Gestão Comercial:</strong></h4>
          </div>
          <Outlet /><br /><br /><br />
          <div className='d-flex justify-content-center align-items-center vh-90'>
            <div className='bg-white p-4 rounded border' style={{ width: '50%' }}>
              <h4><center>Concluir Compra:</center></h4><br />
              <form action='' onSubmit={atualizar}>
                <div className='mb-3'>
                  <label htmlFor='nome' style={{ fontSize: '20px', margin: '0 115px' }}>Nome:</label>
                  <input type='text' placeholder='Entre com o nome:' value={nome} onChange={e => nomechange(e.target.value)} style={{ fontSize: '20px', width: 370, margin: '0 115px' }} className='form-control rounded-0' name='nome' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='vendan' style={{ fontSize: '20px', margin: '0 115px' }}>Compra nº:</label>
                  <label htmlFor='preco' hidden style={{ fontSize: '20px', margin: '0 -90px' }}>Preço:</label>
                  <label htmlFor='qtd' hidden style={{ fontSize: '20px', margin: '0 200px' }}>Qtd:</label>
                  <input type='text' value={compran} onChange={e => compranchange(e.target.value)} style={{ fontSize: '20px', width: 85, margin: '0 115px' }} className='form-control rounded-0' name='vendan' />
                  <input type='decimal' hidden value={preco} onChange={e => precochange(e.target.value)} style={{ fontSize: '20px', width: 120, margin: '0 240px', marginTop: '-43px' }} className='form-control rounded-0' name='preco' />
                  <input type='text' hidden value={qtd} onChange={e => qtdchange(e.target.value)} style={{ fontSize: '20px', width: 80, margin: '0 403px', marginTop: '-43px' }} className='form-control rounded-0' name='qtd' />
                </div>
                <div className='mb-3'>
                  <label htmlFor='total' style={{ fontSize: '20px', margin: '0 115px' }}>Total:</label>
                  <label htmlFor='parcela' style={{ fontSize: '20px' }}>Valor Pago:</label>
                  <label htmlFor='parcela' style={{ fontSize: '20px', margin: "0 60px" }}>Parcelamento:</label>
                  <input type="decimal" value={total} onChange={e => totalchangechange(e.target.value)} style={{ fontSize: '20px', width: 130, margin: '0 115px' }} className='form-control rounded-0' name='total' id='total' />
                  <input type="decimal" onKeyUp={MudaCorValorPag} value={valorpag} onChange={e => valorpagchange(e.target.value)} style={{ fontSize: '20px', width: 130, margin: '0 280px', marginTop: '-43px' }} className='form-control rounded-0' name='valorpag' id='valorpag' />
                  <select value={parcelamento} onChange={e => parcelamentochange(e.target.value)} style={{ fontSize: '20px', width: 120, margin: '0 440px', marginTop: '-43px' }} className='form-select' name='parcela' id='parcela'>
                    <option value=""></option>
                    <option value="2x">2x</option>
                    <option value="3x">3x</option>
                    <option value="4x">4x</option>
                    <option value="5x">5x</option>
                    <option value="6x">6x</option>
                    <option value="7x">7x</option>
                    <option value="8x">8x</option>
                    <option value="9x">9x</option>
                    <option value="10x">10x</option>
                    <option value="11x">11x</option>
                    <option value="12x">12x</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='formapaga' style={{ fontSize: '20px', margin: '0 115px' }}>Forma de Pagamento:</label>
                  <label htmlFor='parcela' style={{ fontSize: '20px', marginLeft: '-72px' }}>Parcelas:</label>
                  <label htmlFor='parcelan' style={{ fontSize: '20px', marginLeft: '60px' }}>Parcela:</label>
                  <select onMouseDown={MudaCorForma} style={{ fontSize: '20px', width: 130, margin: '0 115px' }} name='formapag' id='formapag' className='form-select' value={formapag} onChange={e => formapagchange(e.target.value)}>
                    <option value=""></option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Pix">Pix</option>
                    <option value="Débito">Débito</option>
                    <option value="Crédito">Crédito</option>
                    <option value="Boleto">Boleto</option>
                  </select>
                  <select value={parcela} onChange={e => parcelachange(e.target.value)} style={{ fontSize: '20px', width: 120, margin: '0 355px', marginTop: '-43px' }} className='form-select' name='parcela' id='parcela'>
                    <option value=""></option>

                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select value={parcelan} onChange={e => parcelanchange(e.target.value)} style={{ fontSize: '20px', width: 120, margin: '0 495px', marginTop: '-43px' }} className='form-select' name='parcelan' id='parcela'>
                    <option value=""></option>
                    <option value="1ª">1ª</option>
                    <option value="2ª">2ª</option>
                    <option value="3ª">3ª</option>
                    <option value="4ª">4ª</option>
                    <option value="5ª">5ª</option>
                    <option value="6ª">6ª</option>
                    <option value="7ª">7ª</option>
                    <option value="8ª">8ª</option>
                    <option value="9ª">9ª</option>
                    <option value="10ª">10ª</option>
                    <option value="11ª">11ª</option>
                    <option value="12ª">12ª</option>
                  </select>

                </div>
                <div className='mb-3'>
                  <label htmlFor='formapag' style={{ fontSize: '20px', margin: '0 115px' }}>Fornecedor:</label>
                  <select style={{ fontSize: '20px', width: 420, margin: '0 115px' }} id='forname' className='form-select' onChange={(e) => setValues({ ...values, id: e.target.value })} onMouseUp={MudaCorFor}>
                    <option></option>
                    {forname.map(val => {
                      return <option value={val.nome}>{val.nome}</option>
                    })}
                  </select>
                </div>
                <div className='mb-3'>
                  <label htmlFor='mes' style={{ fontSize: '20px', margin: '0 115px' }}>Mês:</label>
                  <label htmlFor='troco' style={{ fontSize: '20px', margin: '0 80px' }}>Troco:</label>
                  <select onMouseDown={MudaCorMes} style={{ fontSize: '20px', width: 150, margin: '0 115px' }} name='mes' id='mes' className='form-select' value={mes} onChange={e => meschange(e.target.value)}>
                    <option value=""></option>
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                  </select>
                  <input type='decimal' onKeyUp={MudaCorTroco} style={{ fontSize: '20px', width: 150, margin: '0 360px', marginTop: '-43px' }} className='form-control rounded-0' id='troco' value={troco} onChange={e => trocochange(e.target.value)} />

                </div>

                <div className='mb-3'>
                  <button type='submit' className='btn btn-success border rounded-0' style={{ width: 150, margin: '0 115px', fontSize: '16px' }}>Concluir:</button>

                  <Link to='/compras/troco' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'blue', margin: '0 -90px', fontSize: '16px', width: 150 }}>Troco:</Link>
                  <Link to='/compras/numero' className="btn border rounded-0" style={{ color: 'white', backgroundColor: 'orange', margin: '0 110px', fontSize: '16px', width: 150 }}>Voltar:</Link>
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

export default ComprasNumeroEditar