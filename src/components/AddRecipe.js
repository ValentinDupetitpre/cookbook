import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField'
import add from '../media/add.png'

import Ingredient from './Ingredient'
import './AddRecipe.css'


const AddRecipe = (props) => {
    const [ingredients, setIngredients] = useState([{index: 0, quantite: 1, ingredient: ''}])

    const handleChangeIngredients = (e) => {
        
        
        if(['quantite','ingredient'].includes(e.target.name)){
            let data = [...ingredients]
            const rawId = e.target.id
            const id = rawId.slice(rawId.indexOf('-') + 1)
            data[id][e.target.name]=e.target.value
        }else{
            console.log("pas le bon champs")
        }
    }

    const addIngredient = () => {
        setIngredients(
            (previousIngredients) => 
                [
                    ...previousIngredients, 
                    {index: Math.random(), quantite: 1, ingredient: ''}
                ]
        )
    }

    const removeIngredient = (val) => {
        setIngredients(ingredients.filter(item => item !== val))
    }


    const submitForm = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(data)
    }

    return(
        <section className="add-recipe">
            <h3>Suggérez une nouvelle recette</h3>
            <form id="form-add-recipe" onSubmit={submitForm}>
                <TextField 
                    className="input"
                    required
                    id="standard-required-title"
                    label="Titre"
                    defaultValue=""
                    margin="normal"
                    name="title"
                />
                <h4>Ingrédients</h4> 
                <div onChange={handleChangeIngredients}>
                    <Ingredient ingredients={ingredients} delete={removeIngredient}/>
                </div>
                <div className="add-ingredient" onClick={addIngredient}>
                    <img className="add-button" src={add} alt="add" />
                    <p>Ajouter un ingrédient</p>
                </div>

                <input type="submit" value="Envoyer"/>
            </form>
        </section>
    )
}

export default AddRecipe