import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Menu from './Menu'
import Recipes from './Recipes'

const Home = (props) => {

    return(
        <section className="home">
            <Menu showSearchbar={props.searching}/>
            <section className="content">
                <Switch>
                    <Route exact path="/" component={Recipes} />
                    {/* <Route exact path="/recipe/:recipeId" render={(props) => <Recipe {...props} />} /> */}
               </Switch>
            </section>
        </section>
    )
}

export default withRouter(Home)