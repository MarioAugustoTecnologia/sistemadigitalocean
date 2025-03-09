import React, {useState} from 'react';//4=> criação do Login...
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import "bootstrap-icons/font/bootstrap-icons.css";

 //9=> Continuanção...

const Login = () => { 

  const [usuario, setUsuario] = useState('')  
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()
 
  
   const LoginForm = (e) => {

    e.preventDefault()

    if(validate()){ 

      //console.log('proceed')
      fetch('http://localhost:3000/usuarios/' + usuario).then((res) => {
        
        return res.json()
  
      }).then((resp) => {
  
        console.log(resp)
  
        if(Object.keys(resp).length === 0){
  
          toast.error('Entre com um usuario valido...' ) 
  
        }else{
  
           bcrypt.compare(senha, resp.hashedPassword, function(err, isMatch){
            if(err){
              throw err
            }
            else if(!isMatch){
             toast.error('Senha Invalida ! ...')
            }
            else{  
              toast.success('Logado com sucesso !')            
              localStorage.setItem('usuario', usuario)          
              navigate('/home')         
            }
          })   
        } 
  
      }).catch((err) => {
        toast.error('Usuario e/ou Senha invalidos...' )
  
      }) 
       
    }  

}

const validate = () => {

  let result = true

  if(usuario === '' || usuario === null && senha === '' || senha === null ){
    result = false
    toast.warning('Digite o nome de usuario e a senha !')
    document.getElementById('usuario').style.borderColor = 'red';
    document.getElementById('senha').style.borderColor = 'red';
  }else if(senha === '' || senha === null){
    result = false
    toast.warning('Digite a senha !')
    document.getElementById('senha').style.borderColor = 'red';
  }else if(usuario === '' || usuario === null){
    result = false
    toast.warning('Digite o nome de usuario !')
    document.getElementById('usuario').style.borderColor = 'red';
  }
  return result
}

function MostraUsuario() {

  document.getElementById('usuario').style.borderColor = 'GainsBoro';
  
}

function MostraSenha() {

  document.getElementById('senha').style.borderColor = 'GainsBoro';
  
}

function MostraTexto(){

  var inputPass = document.getElementById('senha');
  var btnshowPass = document.getElementById('mostrasenha')

  if(inputPass.type === 'password'){
    inputPass.setAttribute('type','text')
    btnshowPass.classList.replace('bi-eye-fill','bi-eye-slash')
  }
  else{
    inputPass.setAttribute('type','password')
    btnshowPass.classList.replace('bi-eye-slash','bi-eye-fill')

  }
}


  
  return (
             
     <div className='d-flex justify-content-center align-items-center vh-100'>
       <div className='bg-white p-3 rounded w-25 border'>
          <div className='text-danger'></div>
             <h2>Login:</h2><br />
           <form action=''>
              <div className='mb3'>                  
                  <label htmlFor="nome" style={{margin:'0 40px', fontSize:25}}>Usuario:</label>
                  <input type="text" placeholder='Entre com o nome:'                  
                  className='form-control rounded-0' style={{width:320, margin:'0 40px', fontSize:20}} 
                  value={usuario} onChange={e => setUsuario(e.target.value)} id='usuario' onKeyUp={MostraUsuario}
                />
              </div>
              <br/>
              <div className='mb3'>
                  <label htmlFor="senha" style={{margin:'0 40px', fontSize:25}}>Senha:</label>
              </div>  
              <div className='d-flex'> 
                  <input type="password" placeholder='Entre com a senha:'
                  className='form-control rounded-0' style={{width:320, margin:'0 40px', fontSize:20}}
                  value={senha} onChange={e => setSenha(e.target.value)} id='senha' onKeyUp={MostraSenha}                  
              />
              <i class="bi bi-eye-fill" id='mostrasenha' onClick={MostraTexto} style={{fontSize:25}}></i> 
              </div>
              <br />
              <button type='submit' onClick={(e) => LoginForm(e)} className='btn btn-success rounded-0' style={{width:160, margin:'0 130px'}}>Entrar:</button>
                  
           </form>
       </div>

    </div>

  )
}

export default Login