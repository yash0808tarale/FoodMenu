import React from 'react';
import image002 from '../images/menu--2.jpeg';
import image001 from '../images/menu--1.jpeg';
import image0 from '../images/menu-0.jpeg';
import image1 from '../images/menu-1.jpg';
import image2 from '../images/menu-2.jpg';
import image3 from '../images/menu-3.jpg';
import image4 from '../images/menu-4.jpg';
import image5 from '../images/menu-5.jpg';
import image6 from '../images/menu-6.jpg';
import image7 from '../images/menu-7.jpg';
import image9 from '../images/menu-9.jpg';
import image10 from '../images/menu-10.jpg';


const Menu = () => {
  return (
    <section className="menu section" id="menu">

    <h3 className="sub-heading"> our menu </h3>
    <h1 className="heading"> today's speciality </h1>

    <div className="box-container">
        <div className="box">
            <div className="image">
                <img src={image001} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Pudim</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.899/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image002} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Macarons</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.1299/-</span>
            </div>
        </div>
        <div className="box">
            <div className="image">
                <img src={image0} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Meat Pie</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.1999/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image1} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Pizza</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.1599/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image2} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Mutton Burger</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs999/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image3} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Pancake</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.1399/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image4} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Waffle</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.799</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image5} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Pancake Cake</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.3099/</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image6} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Muffin</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs699/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image7} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Un jugo de naranja</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.399/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image9} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Un jugo de limon</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.199/-</span>
            </div>
        </div>

        <div className="box">
            <div className="image">
                <img src={image10} alt=""/>
                <i className="fas fa-heart"></i>
            </div>
            <div className="content">
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <h3>Bacalao</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, accusantium.</p>
                <a href="/" className="btn">add to cart</a>
                <span className="price">Rs.1799</span>
            </div>
        </div>

    </div>

</section>
  )
}

export default Menu
