import './App.css'
import { useState, useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Recipes from './components/Recipes'

function App() {
  const menu = ['Apéro', 'Entrée', 'Plat', 'Dessert']
  const [lastActive, setLastActive] = useState('Apéro')

  useEffect(()=> {
    document.getElementById("Apéro").classList.add('active')
  }, [])

  const handleMenuClick = (item) => {
    const link = document.getElementById(item)
    if(lastActive) document.getElementById(lastActive).classList.remove("active")
    link.classList.add('active')
    setLastActive(item)
    scrollToElement(link.parentElement)
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
        Hākari
      </header>
      <section className="menu">
        <ul>
          { 
            menu.map(item => <li key={item}><p href="#" key={item} onClick={() => handleMenuClick(item)} id={item}>{item}</p></li>)
          }
        </ul>
      </section>
      <section className="content">
        <Switch>
            <Route exact path="/" component={Recipes} />
            {/* <Route exact path="/recipe/:recipeId" render={(props) => <Recipe {...props} />} /> */}
        </Switch>
      </section>
    </div>
  );
}

export default withRouter(App);
