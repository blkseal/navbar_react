import './App.css';
import NavBar from './navbar.js'
import Card from './cards.js'


function App() {
  const name = "Hugo Fiuza"
  const title = "Full-Stack Developer"
  const instagram = "https://www.instagram.com/hugofiuza/"
  const linkedin = "https://www.linkedin.com/in/hugofiuza/"
  return <>
    <NavBar name={name} title={title} instagram={instagram} linkedin={linkedin} />
    <section className="main-section">
      <section className="card-section">
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </section>
  </>
}

export default App;