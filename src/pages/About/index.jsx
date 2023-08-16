import React from 'react'
import './About.css'
import { PiAirplaneTiltLight } from 'react-icons/pi'
import { BsPeople } from 'react-icons/bs'

export default function About() {
  return (
    <main id='aboutMain'>
      <section>
        <article>
          <h1>Sobre nós <PiAirplaneTiltLight/></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut fugit aliquid doloribus ipsam magni porro quod numquam voluptatem ad illo omnis amet eligendi est cum, blanditiis maxime eum atque!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maiores architecto corrupti adipisci voluptatem soluta odit, distinctio laudantium optio eos porro! Quos deleniti eveniet ipsum deserunt, labore laudantium facilis a?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, aut animi. Quo odio pariatur ratione nisi, perferendis deleniti quae voluptatibus at magni expedita ea culpa quam harum quasi sapiente ullam!</p>
        </article>

        <article>
          <h1>O que fazemos <BsPeople/></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut fugit aliquid doloribus ipsam magni porro quod numquam voluptatem ad illo omnis amet eligendi est cum, blanditiis maxime eum atque!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, maiores architecto corrupti adipisci voluptatem soluta odit, distinctio laudantium optio eos porro! Quos deleniti eveniet ipsum deserunt, labore laudantium facilis a?</p>
        </article>
      </section>
    </main>
  )
}
