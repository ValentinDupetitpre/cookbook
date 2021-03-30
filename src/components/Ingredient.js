import React from 'react'

import TextField from '@material-ui/core/TextField'
import remove from '../media/remove.png'

const Ingredient = (props) => {
    return props.ingredients.map( (val, id) => {
        let  quantite = `quantite-${id}`, 
            ingredient= `ingredient-${id}`;

        return(
            <div className="ingredients" key={val.index}>
                <div className="qte">
                    <TextField
                        required
                        label="Quantité"
                        defaultValue={1}
                        margin="normal"
                        name="quantite"
                        data-id={id}
                        id={quantite}
                    />
                </div>
                <div className="name">
                    <TextField 
                        className="input"
                        required
                        label="ingredient"
                        defaultValue=""
                        margin="normal"
                        name="ingredient"
                        data-id={id}
                        id={ingredient}
                    />
                </div>
                <div className="remove">
                    <img className="remove-button" src={remove} alt="remove" onClick={() => props.delete(val)} />
                </div>
            </div>
        )
    }
    )
}

export default Ingredient