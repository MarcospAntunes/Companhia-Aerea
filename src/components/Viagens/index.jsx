import React, { useState } from 'react'

import Card from './Card'
import cards from './cards.json'
import styles from './Viagens.css'

export default function Viagens() {
    const [itens, setItens] = useState(cards)
  return (
    <Card viagens={itens} styles= {styles}/>
  )
}
