import React from 'react'
import './Home.css'
import { Button, Div } from '../../components/Botao/Botao.style'
import Viagens from '../../components/Viagens'

export default function Home() {
  return (
    <main id='homeMain'>
      <section id='apresentacao'>
          <h2>Dê Início a suas viagens com conforto</h2>
          <h1>Expiriêncie a beleza do mundo com viagens <span>inesquecíveis</span></h1>
          <p>Sua jornada começa com a gente: compre uma passagem de avião e tenha uma expiriência inesquecível do mundo.</p>
        <Div>
          <Button $azul>Comprar Passagem</Button>
          <Button>Saber Mais</Button>
        </Div>
      </section>
        
      <section id='passagens'>
        <Viagens />
      </section>
    </main>
  )
}
