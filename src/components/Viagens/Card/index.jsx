import React, { useState } from 'react'
import '../../../'


export default function Card({ viagens, styles }) {
    
  return (
    <ul id='cards'>
      {viagens.map((viagem) => {
        return (
          <li key={viagem.id} className='card'>
            <img src={viagem.imagem} alt={viagem.destino} className='cardImagem' />
            <p>{viagem.tipo}</p>
            <h1>{viagem.destino}</h1>
            <p>{viagem.partida}</p>
            <p>{viagem.companhia}</p>
            <p className='trajeto'>{viagem.trajeto}</p>
            <p>{viagem.preço_ida_e_volta}</p>
          </li>
        )
      })}
    </ul>
  )
}
