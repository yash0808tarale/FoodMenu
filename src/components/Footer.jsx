import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return (
    <section className="footer" style={{backgroundColor:props.orange}}>

    <div className="box-container">

        <div className="box">
            <h3>locations</h3>
            <a href="/">india</a>
            <a href="/">japan</a>
            <a href="/">russia</a>
            <a href="/">USA</a>
            <a href="/">france</a>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <NavLink to="/">home</NavLink>
            <NavLink to="/dishes">dishes</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/menu">menu</NavLink>
            <NavLink to="/order">order</NavLink>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <a href="/">+912354678909</a>
            <a href="/">+916754788478</a>
            <a href="/">yt@gmail.com</a>
            <a href="/">ty@gmail.com</a>
            <a href="/">mumbai, india - 400104</a>
        </div>

        <div className="box">
            <h3>follow us</h3>
            <a href="/">facebook</a>
            <a href="/">twitter</a>
            <a href="/">instagram</a>
            <a href="/">linkedin</a>
        </div>

    </div>

    <div className="credit">Designed By<span> Yash Tarale</span> </div>

</section>
  )
}

export default Footer
