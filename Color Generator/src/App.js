import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

const [color, setColor] = useState('')
const [error, setError] = useState(false)
const [lists, setLists]   = useState([])


const handleSubmit = (e) =>{
  e.preventDefault()
  try {
    let colors = new Values(color).all(10)
    setLists(colors)
  } catch (error) {
    setError(true)
    console.log(error)
  }
}
  return <>
    <section className='container'>
       <h3>Color Generator</h3>
       <form onSubmit={handleSubmit}>
          <input value={color} 
            className={`${error ? 'error' : ''}`}
            onChange={(e) => setColor(e.target.value)}
            type='text' placeholder='#f15025' />
          
          <button type='submit' className='btn'>Submit</button>
       </form>
    </section>

    <section className='colors'>
      {lists.map((color, index) => {
        console.log(color)
        return <SingleColor hexColor={color.hex} key={index} {...color} index={index} />
      })}
    </section>
  </>
}

export default App
