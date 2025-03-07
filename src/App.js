import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import NavBar from './navbar.js'
import Home from './pages/Home'
import About from './pages/About'
import MyWork from './pages/MyWork'
import GroupWork from './pages/GroupWork'
import Contact from './pages/Contact'

function App() {
  const name = "Hugo Fiuza"
  const title = "Full-Stack Developer"
  const instagram = "https://www.instagram.com/hugofiuza/"
  const linkedin = "https://www.linkedin.com/in/hugofiuza/"
  
  return (
    <BrowserRouter>
      <header>
        <NavBar name={name} title={title} instagram={instagram} linkedin={linkedin} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/groupwork" element={<GroupWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer></footer>
    </BrowserRouter>
  )
}

export default App;