import React, { useState, useEffect } from 'react'

import TextField from '@material-ui/core/TextField'
import add from '../media/add.png'

import ItemView from './ItemView'
import './AddRecipe.css'


const AddRecipe = (props) => {
    const [ingredients, setIngredients] = useState([{index: 0, quantite: 1, ingredient: ''}])
    const [outils, setOutils] = useState([{index: 0, quantite: 1, outil: ''}])
    const [instructions, setInstructions] = useState([{index: 0, instruction: ''}])

    const handleChangeItems = (e, item) => {
        switch (item) {
            case 'ingredient':
                if(['quantite','ingredient'].includes(e.target.name)){
                    let data = [...ingredients]
                    const rawId = e.target.id
                    const id = rawId.slice(rawId.indexOf('-') + 1)
                    data[id][e.target.name]=e.target.value
                }else{
                    console.log("pas le bon champs")
                }
                break;
            case 'outil':
                if(['quantite','outil'].includes(e.target.name)){
                    let data = [...outils]
                    const rawId = e.target.id
                    const id = rawId.slice(rawId.indexOf('-') + 1)
                    data[id][e.target.name]=e.target.value
                }else{
                    console.log("pas le bon champs")
                }
                break;
            case 'instruction':
                if(['instruction'].includes(e.target.name)){
                    let data = [...instructions]
                    const rawId = e.target.id
                    const id = rawId.slice(rawId.indexOf('-') + 1)
                    data[id][e.target.name]=e.target.value
                }else{
                    console.log("pas le bon champs")
                }
                break;
            default:
                break;
        }
    }

    const addIngredient = (item) => {
        switch (item) {
            case 'ingredient':
                setIngredients(
                    (previousIngredients) => 
                        [
                            ...previousIngredients, 
                            {index: Math.random(), quantite: 1, ingredient: ''}
                        ]
                )
                break;
            case 'outil':
                setOutils(
                    (previousOutils) => 
                        [
                            ...previousOutils, 
                            {index: Math.random(), quantite: 1, outil: ''}
                        ]
                )
                break;
            case 'instruction':
                setInstructions(
                    (previousInstructions) => 
                        [
                            ...previousInstructions,
                            {index: Math.random(), instruction: ''}
                        ]
                )
                break;
            default:
                break;
        }
    }

    const removeIngredient = (val, item) => {
        switch (item) {
            case 'ingredient':
                setIngredients(ingredients.filter(item => item !== val))
                break;
            case 'outil':
                setOutils(outils.filter(item => item !== val))
                break;
            case 'instruction':
                setInstructions(instructions.filter(item => item !== val))
                break;
            default:
                break;
        }
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
                <div onChange={(e) => handleChangeItems(e, 'ingredient')}>
                    <ItemView array={ingredients} item="ingredient" delete={removeIngredient} multiline={false} />
                </div>
                <div className="add-ingredient" onClick={() => addIngredient('ingredient')}>
                    <img className="add-button" src={add} alt="add" />
                    <p>Ajouter un ingrédient</p>
                </div>
                
                <h4>Outils</h4>
                <div onChange={(e) => handleChangeItems(e, 'outils')}>
                    <ItemView array={outils} item="outil" delete={removeIngredient} multiline={false}/>
                </div>
                <div className="add-ingredient" onClick={() => addIngredient('outil')}>
                    <img className="add-button" src={add} alt="add" />
                    <p>Ajouter un outils</p>
                </div>
                <h4>Instructions</h4>
                <div onChange={(e) => handleChangeItems(e, 'instructions')}>
                    <ItemView array={instructions} item="instruction" delete={removeIngredient} multiline={true}/>
                </div>
                <div className="add-ingredient" onClick={() => addIngredient('instruction')}>
                    <img className="add-button" src={add} alt="add" />
                    <p>Ajouter une étape</p>
                </div>
                <h4>Parfait pour</h4>
                <h4>Vignettes</h4>
                <input type="submit" value="Envoyer"/>
            </form>
        </section>
    )
}

export default AddRecipe