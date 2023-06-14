import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizzas})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet. Ex quod magni ut voluptatem quisquam ut quas molestiae. Est repellendus dolores aut asperiores magnam eos omnis fugit. 33 omnis possimus eos consequatur dolor aut cupiditate harum id quod error qui fuga impedit sed voluptas rerum est dolores libero.

Quo atque doloribus hic labore optio et laboriosam nihil in reiciendis pariatur vel nobis deserunt qui tempora tempore! A expedita illum eum voluptatibus sint et voluptates possimus qui iste quasi qui dicta solu At expedita quam. Et necessitatibus officiis eum cumque neque hic reprehenderit eligendi. Qui reprehenderit accusamus ut nihil temporibus ea incidunt fugiat.

Et sunt placeat vel esse ipsa nam commodi dicta! Qui dolorem omnis hic laboriosam veniam aut doloremque dolor.</p>
      </div>
    </div>
  )
}

export default About