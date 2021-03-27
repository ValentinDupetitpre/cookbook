import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField'
import add from '../media/add.png'

import './AddRecipe.css'

const AddRecipe = (props) => {

    let ingredientComponent = (<div className="ingredients">
                    <div className="qte">
                        <TextField
                            id="quantite-ingredient"
                            required
                            label="Quantité"
                            type="number"
                            defaultValue={1}
                            margin="normal"
                            name="quantite-1"
                        />
                    </div>
                    <div className="name">
                        <TextField 
                            className="input"
                            required
                            id="standard-required-title"
                            label="ingredient"
                            defaultValue=""
                            margin="normal"
                            name="ingredient-1"
                        />
                    </div>
                </div>)

    const [ingredients, setIngredients] = useState([])



    useEffect(()=> {
        console.log("useffect")
    },[ingredients])

    const addIngredient = () => {
        console.log(ingredients)
        setIngredients(ingredients.concat([ingredientComponent]))
    }

    return(
        <section className="add-recipe">
            <h3>Suggérez une nouvelle recette</h3>
            <form>
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
                {ingredients.map((item) => item)}
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