import React from 'react'
import logo from '../../assets/logo.PNG'
import styles from './Header.css'
import { Button, Div } from '../Botao/Botao.style'
import { Link } from 'react-router-dom'
import { CiLogin } from 'react-icons/ci'

export default function Header() {
  return (
    <header>
        <div id='logo'>
            <img src={logo} alt="MK Airline" />
        </div>

        <nav id='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a href="#">Passagens Aéreas</a>
            <Link to="#">Serviços</Link>
            <a href ="#">Contato</a>
        </nav>
        <Div>
          <Button $botoesHeader>Entrar</Button>
          <Button $azul $botoesHeader>Registrar</Button>
        </Div>
        
    </header>
  )
}
