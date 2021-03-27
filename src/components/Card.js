import React from 'react'
import {withRouter} from 'react-router-dom'
import './Card.css'
import Tag from './Tag'
import picture from '../media/food.jpg'

const Card = (props) => {
  // const picture = articleService.useTopPicture(props.id, 'main')

  const goToRecipe = () => { 
    props.history.push('/recipe/'+props.id)
  }

  return (
    <div className="card-wrapper" onClick={goToRecipe}>
      <div className="image-preview">
        <img src={picture ? picture : undefined} alt={picture}/>
      </div>
      <div className="text-preview">
        <h2>Spagetthi alla Carbonara</h2>
        <div className="tags">
          <Tag text="-20mn" color="aquamarine"/>
          <Tag text="veggie" color="darkkhaki"/>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Card)