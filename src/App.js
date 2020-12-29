import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const menu = ['Apéro', 'Entrée', 'Plat', 'Dessert']
  const [lastActive, setLastActive] = useState("")

  const handleMenuClick = (item) => {
    const elem = document.getElementById(item)
    if(lastActive) document.getElementById(lastActive).classList.remove("active")
    elem.classList.add("active")
    setLastActive(item)
  }

  return (
    <div className="App">
      <header className="App-header">
        Fork off
      </header>
      <section className="menu">
        <ul>
          { 
            menu.map(item => <li key={item}><a href="#" key={item} onClick={() => handleMenuClick(item)} id={item}>{item}</a></li>)
          }
        </ul>
      </section>
      <section className="content">
          
      </section>
    </div>
  );
}

export default App;
