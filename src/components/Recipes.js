import React from 'react'
import Card from './Card'
import './Recipes.css'
import add from '../media/add.png'

const Recipes = (props) => {

    const goToSuggestARecipe = () => { 
        props.history.push('/suggest')
      }

    return (
    <section className="recipes">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <img className="add-button" src={add} alt="add" onClick={goToSuggestARecipe} />
    </section>
    )
}

export default Recipes