import React from 'react'
import './Tag.css'

const Tag = (props) => {

    return(
        <div className="tag" style={{backgroundColor: props.color}}>
            {props.text}
        </div>
    )
}

export default Tag