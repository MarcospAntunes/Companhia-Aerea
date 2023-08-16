import React from 'react'
import './404.css'
import { Button } from '../../components/Botao/Botao.style'
import { Navigate } from 'react-router-dom'

export default function Erro404() {
  return (
    <main id='main404'>
        <h1>Erro 404!</h1>
        <h2>Página não encontrada</h2>
        <p>Parece que você está tentando acessar uma página inexistente ou que esteja temporariamente fora do ar.</p>
        <br />
        <Button $azul onClick={() => window.location.href = "/"}>Voltar</Button>
    </main>
  )
}
