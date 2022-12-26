import React from 'react';
import dish01 from '../images/dish--1.png';
import dish0 from '../images/dish-0.png';
import dish1 from '../images/dish-1.png';
import dish2 from '../images/dish-2.png';
import dish3 from '../images/dish-3.png';
import dish4 from '../images/dish-4.png';
import dish5 from '../images/dish-5.png';
import dish6 from '../images/dish-6.png';

const Dishes = () => {
  return (
    <section className="dishes section" id="dishes">

    <h3 className="sub-heading"> our dishes </h3>
    <h1 className="heading"> popular dishes </h1>

    <div className="box-container">
        
        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish01} alt=""/>
            <h3>Paneer Tikka</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.399/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish0} alt=""/>
            <h3>Tandoori Momos</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.299/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish1} alt=""/>
            <h3>Burger</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.349/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish2} alt=""/>
            <h3>Cutlet</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.249/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish3} alt=""/>
            <h3>Chicken</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.699/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish4} alt=""/>
            <h3>Pizza</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.199/- - Rs.2099/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish5} alt=""/>
            <h3>Chocolate Icecream</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.199/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

        <div className="box">
            <i  className="fas fa-heart"></i>
            <i  className="fas fa-eye"></i>
            <img src={dish6} alt=""/>
            <h3>Fried Chicken</h3>
            <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
            </div>
            <span>Rs.399/-</span>
            <a href="/" className="btn">add to cart</a>
        </div>

    </div>

</section>
  )
}

export default Dishes
