import React, {useState, useEffect} from 'react'
import './App.css'
import { Switch, Route, withRouter } from 'react-router-dom'
import search from './media/loupe.png'
import filter from './media/filter.png'
import back from './media/back.png'
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'

const App = ({history}) => {
  const [searching, setSearching] = useState(false)
  const [isAdminPage, setIsAdminPage] = useState(false)
  
  const toggleSearch = () => setSearching(!searching)

  useEffect(()=> {
    setIsAdminPage(window.location.href.includes("suggest"))
  })
  
  return (
    <div className="App">
      <header className="app-header">
        {!isAdminPage && <img className="header-button" src={filter} alt="filtre"/>}
        {isAdminPage && <img className="header-button" src={back} alt="retour" onClick={() => history.goBack()}/> }
        <h1>Hākari</h1>
        {!isAdminPage && <img className="header-button right" onClick={() => toggleSearch()} src={search} alt="rechercher"/>}
      </header>
      <Switch>
        <Route exact path="/" component={() => <Home searching={searching}/>} />
        <Route exact path="/suggest" component={AddRecipe} />
        {/* <Route exact path="/recipe/:recipeId" render={(props) => <Recipe {...props} />} /> */}
      </Switch>
    </div>
  );
}

export default withRouter(App);
