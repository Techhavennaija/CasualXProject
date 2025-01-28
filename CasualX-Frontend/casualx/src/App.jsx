import { useState } from 'react'
import Main from './ui_components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Main />
   </div>
  )
}

export default App
