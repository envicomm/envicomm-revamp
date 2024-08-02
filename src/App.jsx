import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
   
          <Contact/>

      </div>
    
  
  )
}

export default App
