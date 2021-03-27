import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'

const Menu = (props) => {
    const menu = ['Apéro', 'Entrée', 'Plat', 'Dessert']
    const [lastActive, setLastActive] = useState('Apéro')

    useEffect(()=> {
        document.getElementById("Apéro").classList.add('active')
    }, [])

    const handleMenuClick = (item) => {
        const link = document.getElementById(item)
        if(lastActive) document.getElementById(lastActive).classList.remove("active")
        link.classList.add('active')
        setLastActive(item)
        scrollToElement(link.parentElement)
    }

    const scrollToElement = (element) => {
        const elementCenter = element.offsetLeft + element.offsetWidth/2
        const distanceToScrollToRight = elementCenter - window.screen.width/2
        const step = (distanceToScrollToRight - element.parentNode.scrollLeft)/10
        const scrolling = setInterval(() => {
            if(distanceToScrollToRight > element.parentNode.scrollLeft){
                element.parentNode.scrollLeft += step
            }else if(distanceToScrollToRight < element.parentNode.scrollLeft){
                element.parentNode.scrollLeft -= Math.abs(step)
            }

            if((distanceToScrollToRight- element.parentNode.scrollLeft <= 10 && distanceToScrollToRight > element.parentNode.scrollLeft)
            || (element.parentNode.scrollLeft - distanceToScrollToRight <= 10 && distanceToScrollToRight < element.parentNode.scrollLeft)
            || element.parentNode.scrollLeft === 0 || element.parentNode.scrollWidth - element.parentNode.scrollLeft - window.screen.width <=1){
                window.clearInterval(scrolling)
            }
        },25)
    }
    

    return(
        <section className="menu">
            {props.showSearchbar &&
            <Paper component="form" className="searchbar">
                <InputBase
                    className="input"
                    placeholder="Rechercher"
                    inputProps={{ 'aria-label': 'rechercher' }}
                    />
                <IconButton type="submit" className="search" aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>}
            <ul>
            { 
                menu.map(item => <li key={item}><p href="#" key={item} onClick={() => handleMenuClick(item)} id={item}>{item}</p></li>)
            }
            </ul>
        </section>
    )
}

export default Menu