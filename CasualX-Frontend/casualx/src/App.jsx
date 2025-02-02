import { useState } from 'react'
import Main from './ui_components/Main'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchPopUp from './ui_components/SearchPopUp'
import RegistrationForm from './ui_components/RegistrationForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<SearchPopUp />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
