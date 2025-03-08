import {BrowserRouter, Routes, Route} from 'react-router-dom';//3=> Criação do browser de rotas.
import PrivateRoutes from './components/PrivateRoutes';
import { ToastContainer } from 'react-toastify';
import Login from './components/Login';
import CadUsuarios from './components/CadUsuarios';
import Usuarios from './components/Usuarios';
import EditarUsuario from './components/EditarUsuario';
import UsuarioNome from './components/UsuarioNome';
import UsuarioCategoria from './components/UsuarioCategoria';
import Produtos from './components/Produtos';
import CadProdutos from './components/CadProdutos';
import ProdutosNome from './components/ProdutosNome';
import Vendas from './components/Vendas';
import EditarProduto from './components/EditarProduto';
import Entradas from './components/Entradas';
import Home from './components/Home';
import EntradasNome from './components/EntradasNome';
import EntradasData from './components/EntradasData';
import CadDespesas from './components/CadDespesas';
import Despesas from './components/Despesas';
import EditarDespesa from './components/EditarDespesa';
import Compras from './components/Compras';
import CadCompras from './components/CadCompras';
import ComprasNome from './components/ComprasNome';
import ComprasData from './components/ComprasData';
import Clientes from './components/Clientes';
import CadResultado from './components/CadResultado';
import Resultado from './components/Resultado';
import CadClientes from './components/CadClientes';
import EditarCliente from './components/EditarCliente';
import ProdutosCodigo from './components/ProdutosCodigo';
import CadFornecedor from './components/CadFornecedor';
import Fornecedores from './components/Fornecedores';
import CadCatForn from './components/CadCatForn';
import CadCatProd from './components/CadCatProd';
import FornecedorNome from './components/FornecedorNome';
import FornecedorCat from './components/FornecedorCat';
import EditarFornecedor from './components/EditarFornecedor';
import CatFornecedores from './components/CatFornecedores';
import EntradasMes from './components/EntradasMes';
import EntradasNumero from './components/EntradasNumero';
import EntradasNumeroEditar from './components/EntradasNumeroEditar';
import CatProdutos from './components/CatProdutos';
import ResultadoGerarPdf from './components/ResultadoGerarPdf';
import VendaTroco from './components/VendaTroco';
import EntradasUltima from './components/EntradasUltima';
import ClientesCpf from './components/ClientesCpf';
import ComprasNumero from './components/ComprasNumero';
import ComprasUltima from './components/ComprasUltima';
import ComprasNumeroEditar from './components/ComprasNumeroEditar';
import ComprasMes from './components/ComprasMes';
import CompraTroco from './components/CompraTroco';
import CadVenda from './components/CadVenda';
import FornecedorCatEditar from './components/FornecedorCatEditar';
import ProdutoCatEditar from './components/ProdutoCatEditar';
import VendaDesconto from './components/VendaDesconto';
import ProdutosCat from './components/ProdutosCat';


//8=> Criação do json server com o comando: npx json-server db.json

function App() { 
  
  return (  
    <div className='App'>
    <ToastContainer theme='colored'></ToastContainer>
    <BrowserRouter>
    <Routes>   
    <Route path='/' element={<Login />}></Route>
    <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>}></Route>
    <Route path='/cadusuarios' element={<PrivateRoutes><CadUsuarios /></PrivateRoutes>}></Route>
    <Route path='/usuarios' element={<PrivateRoutes><Usuarios /></PrivateRoutes>}></Route>
    <Route path='/usuarios/editar/:usuariocod' element={<PrivateRoutes><EditarUsuario /></PrivateRoutes>}></Route>      
    <Route path='/usuarios/nome' element={<PrivateRoutes><UsuarioNome /></PrivateRoutes>}></Route>
    <Route path='/usuarios/categoria' element={<PrivateRoutes><UsuarioCategoria /></PrivateRoutes>}></Route>
    <Route path='/produtos' element={<PrivateRoutes><Produtos /></PrivateRoutes>}></Route>
    <Route path='/cadprodutos/:compracod' element={<PrivateRoutes><CadProdutos /></PrivateRoutes>}></Route>
    <Route path='/produtos/editar/:produtocod' element={<PrivateRoutes><EditarProduto /></PrivateRoutes>}></Route>
    <Route path='/produtos/nome' element={<PrivateRoutes><ProdutosNome /></PrivateRoutes>}></Route>
    <Route path='/produtos/codigo' element={<PrivateRoutes><ProdutosCodigo /></PrivateRoutes>}></Route>
    <Route path='/produtos/cat' element={<PrivateRoutes><ProdutosCat /></PrivateRoutes>}></Route>
    <Route path='/produto/cadcat' element={<PrivateRoutes><CadCatProd /></PrivateRoutes>}></Route>
    <Route path='/produtos/categoria/lista' element={<PrivateRoutes><CatProdutos/></PrivateRoutes>}></Route>
    <Route path='/produto/categoria/editar/:catcod' element={<PrivateRoutes><ProdutoCatEditar/></PrivateRoutes>}></Route>
    <Route path='/vendas' element={<PrivateRoutes><Vendas /></PrivateRoutes>}></Route>  
    <Route path='/venda/troco' element={<PrivateRoutes><VendaTroco /></PrivateRoutes>}></Route> 
    <Route path='/venda/desconto' element={<PrivateRoutes><VendaDesconto /></PrivateRoutes>}></Route>     
    <Route path='/entradas' element={<PrivateRoutes><Entradas /></PrivateRoutes>}></Route>
    <Route path='/entradas/nome' element={<PrivateRoutes><EntradasNome /></PrivateRoutes>}></Route>
    <Route path='/entradas/data' element={<PrivateRoutes><EntradasData /></PrivateRoutes>}></Route>
    <Route path='/entradas/mes' element={<PrivateRoutes><EntradasMes /></PrivateRoutes>}></Route>
    <Route path='/entradas/ultima' element={<PrivateRoutes><EntradasUltima /></PrivateRoutes>}></Route>
    <Route path='/entradas/numero' element={<PrivateRoutes><EntradasNumero /></PrivateRoutes>}></Route> 
    <Route path='/entradas/cadastrar/:pcod' element={<PrivateRoutes><CadVenda /></PrivateRoutes>}></Route>  
    <Route path='/entradas/numero/editar/:entradacod' element={<PrivateRoutes><EntradasNumeroEditar /></PrivateRoutes>}></Route> 
    <Route path='/caddespesas' element={<PrivateRoutes><CadDespesas /></PrivateRoutes>}></Route>
    <Route path='/despesas' element={<PrivateRoutes><Despesas /></PrivateRoutes>}></Route>
    <Route path='/despesas/editar/:despesacod' element={<PrivateRoutes><EditarDespesa /></PrivateRoutes>}></Route>
    <Route path='/compras' element={<PrivateRoutes><Compras /></PrivateRoutes>}></Route>
    <Route path='/cadcompras' element={<PrivateRoutes><CadCompras /></PrivateRoutes>}></Route>   
    <Route path='/compras/nome' element={<PrivateRoutes><ComprasNome /></PrivateRoutes>}></Route> 
    <Route path='/compras/data' element={<PrivateRoutes><ComprasData /></PrivateRoutes>}></Route>
    <Route path='/compras/numero' element={<PrivateRoutes><ComprasNumero /></PrivateRoutes>}></Route>
    <Route path='/compras/ultima' element={<PrivateRoutes><ComprasUltima /></PrivateRoutes>}></Route>
    <Route path='/compras/mes' element={<PrivateRoutes><ComprasMes /></PrivateRoutes>}></Route>
    <Route path='/compras/numero/editar/:compracod' element={<PrivateRoutes><ComprasNumeroEditar /></PrivateRoutes>}></Route>
    <Route path='/compras/troco' element={<PrivateRoutes><CompraTroco /></PrivateRoutes>}></Route>
    <Route path='/clientes' element={<PrivateRoutes><Clientes /></PrivateRoutes>}></Route>  
    <Route path='/cadclientes' element={<PrivateRoutes><CadClientes /></PrivateRoutes>}></Route>
    <Route path='/cliente/editar/:clientecod' element={<PrivateRoutes><EditarCliente /></PrivateRoutes>}></Route>
    <Route path='/clientes/cpf' element={<PrivateRoutes><ClientesCpf /></PrivateRoutes>}></Route>
    <Route path='/cadresultado' element={<PrivateRoutes><CadResultado /></PrivateRoutes>}></Route>
    <Route path='/resultado' element={<PrivateRoutes><Resultado /></PrivateRoutes>}></Route>
    <Route path='/resultado/gerarpdf' element={<PrivateRoutes><ResultadoGerarPdf /></PrivateRoutes>}></Route>
    <Route path='/cadfornecedor' element={<PrivateRoutes><CadFornecedor /></PrivateRoutes>}></Route>  
    <Route path='/fornecedores' element={<PrivateRoutes><Fornecedores /></PrivateRoutes>}></Route>
    <Route path='/fornecedores/nome' element={<PrivateRoutes><FornecedorNome /></PrivateRoutes>}></Route>
    <Route path='/fornecedores/categoria' element={<PrivateRoutes><FornecedorCat /></PrivateRoutes>}></Route>
    <Route path='/fornecedor/editar/:forcod' element={<PrivateRoutes><EditarFornecedor /></PrivateRoutes>}></Route>
    <Route path='/cadcatforn' element={<PrivateRoutes><CadCatForn /></PrivateRoutes>}></Route>
    <Route path='/fornecedores/categoria/lista' element={<PrivateRoutes><CatFornecedores /></PrivateRoutes>}></Route>
    <Route path='/fornecedor/categoria/editar/:catcod' element={<PrivateRoutes><FornecedorCatEditar /></PrivateRoutes>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
    
  

  )
}

export default App