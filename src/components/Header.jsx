import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
 
    
    const navtog = () => {
        const menu = document.querySelector('#menu-bars');
        const navbar = document.querySelector('.navbar');
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    }
    return (
        <header style={{backgroundColor:props.colour}}>

            <a href="/" className="logo"><i className="fas fa-utensils"></i> La Casa De La Comida</a>

            <nav className="navbar" style={{color:props.color}}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dishes">Dishes</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/order">Order</NavLink>
            </nav>

            <div className="icons">
                <i className="fas fa-bars" id="menu-bars" onClick={navtog}></i>
                <i className="fas fa-solid fa-sun" id="search-icon" onClick={props.toggle} ></i>
            </div>

        </header>
    )
}

export default Header
