import React from 'react'//7=> Criação do arquivo de rotas privadas...
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => { 
  
  return localStorage.getItem('usuario') ? children : <Navigate to='/'/> 
    
  
}

export default PrivateRoutes