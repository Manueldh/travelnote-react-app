import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar'
import Travelcards from './assets/components/Travelcards'
import data from './data.js'



function App() {

  const cards = data.map(props => {
    return <Travelcards 
      id = {props.id}
      item = {props}
    />
  })


  return (
      <div>
        <Navbar />
        <div className='card-list'>
          {cards}
        </div>
      </div>
  )
}

export default App