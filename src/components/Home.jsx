import React from 'react';
import homepng from '../images/home-img-1.png';


import "swiper/swiper-bundle.min.css";
import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        <section className="home section" id="home" >

            <div className="swiper-container home-slider">

                <div className="swiper-wrapper wrapper">

                    <div className="swiper-slide slide">
                        <div className="content">
                            <span>Welcome to the heaven of food</span>
                            <h3>Enjoy your meal</h3>
                            <p>Best food in the world is ready to get served to you</p>
                            <NavLink to="/menu" className="btn">order now</NavLink>
                        </div>
                        <div className="image">
                            <img src={homepng} alt="" />
                        </div>
                    </div>


                </div>

                <div className="swiper-pagination"></div>

            </div>

        </section>
    )
}

export default Home
