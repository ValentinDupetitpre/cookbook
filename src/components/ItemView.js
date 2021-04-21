import React from 'react'

import TextField from '@material-ui/core/TextField'
import remove from '../media/remove.png'

const ItemView = (props) => {
    return props.array.map( (val, id) => {
        let quantite = `quantite-${id}`
        let item= `${props.item}-${id}`

        return(
            <div className="items" key={val.index}>
                <div className="qte">
                    <TextField
                        required
                        label={props.item === "instruction" ? "Etape N°" : "Quantite"}
                        defaultValue={props.item === "instruction" ? props.array.indexOf(val)+1 : 1}
                        margin="normal"
                        name="quantite"
                        data-id={id}
                        id={quantite}
                        disabled={props.multiline}
                    />
                </div>
                <div className="name">
                    <TextField 
                        className="input"
                        required
                        label={props.item}
                        defaultValue=""
                        margin="normal"
                        name={props.item}
                        data-id={id}
                        id={item}
                        multiline={props.multiline}
                    />
                </div>
                <div className="remove">
                    <img className="remove-button" src={remove} alt="remove" onClick={() => props.delete(val, props.item)} />
                </div>
            </div>
        )
    }
    )
}

export default ItemView