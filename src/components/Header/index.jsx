import React from 'react'
import logo from '../../assets/logo.PNG'
import styles from './Header.css'
import { Button, Div } from '../Botao/Botao.style'

export default function Header() {
  return (
    <header>
        <div id='logo'>
            <img src={logo} alt="MK Airline" />
        </div>

        <nav id='links'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Passagens Aéreas</a>
            <a href="#">Serviços</a>
            <a href="#">Contato</a>
        </nav>
        <Div>
          <Button $botoesHeader>Entrar</Button>
          <Button $azul $botoesHeader>Registrar</Button>
        </Div>
        
    </header>
  )
}
