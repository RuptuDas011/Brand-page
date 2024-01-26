import { useState } from 'react'
import Nav from './components/Nav'
import './App.css'
import Hero from './components/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Nav/>
     <Hero/>
    </>
  )
}

export default App
