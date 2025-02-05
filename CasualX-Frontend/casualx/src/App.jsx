import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Main from './ui_components/Main'
import HubPage from './ui_components/HubPage'
import Blog from './ui_components/Blog'
import Games from './ui_components/Games'
import SearchPopUp from './ui_components/SearchPopUp'
import RegistrationForm from './ui_components/RegistrationForm'
import Testimonials from './ui_components/Testimonials'
import Faqs from './ui_components/Faqs'
import Events from './ui_components/Events'
import Rooms from './ui_components/Rooms'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hub" element={<HubPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/search" element={<SearchPopUp />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/room-to-let" element={<Rooms />} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
