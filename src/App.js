import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const menu = ['Apéro', 'Entrée', 'Plat', 'Dessert']

  const handleMenuClick = (item) => {
    const li = document.getElementById(item).parentElement
    scrollToElement(li)
  }

  const scrollToElement = (element) => {
    const elementCenter = element.offsetLeft + element.offsetWidth/2
    const distanceToScrollToRight = elementCenter - window.screen.width/2
    const step = (distanceToScrollToRight - element.parentNode.scrollLeft)/10
    const scrolling = setInterval(() => {
      if(distanceToScrollToRight > element.parentNode.scrollLeft){
        element.parentNode.scrollLeft += step
      }else if(distanceToScrollToRight < element.parentNode.scrollLeft){
        element.parentNode.scrollLeft -= Math.abs(step)
      }

      if((distanceToScrollToRight- element.parentNode.scrollLeft <= 10 && distanceToScrollToRight > element.parentNode.scrollLeft)
        || (element.parentNode.scrollLeft - distanceToScrollToRight <= 10 && distanceToScrollToRight < element.parentNode.scrollLeft)
        || element.parentNode.scrollLeft === 0 || element.parentNode.scrollWidth - element.parentNode.scrollLeft - window.screen.width <=1){
        window.clearInterval(scrolling)
      }
    },25)
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
