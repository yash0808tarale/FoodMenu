import React from 'react';
import aboutp from '../images/about-img.png'

const About = () => {
    return (
        <section className="about section" id="about">

            <h3 className="sub-heading"> about us </h3>
            <h1 className="heading"> why choose us? </h1>

            <div className="row">

                <div className="image">
                    <img src={aboutp} alt="" />
                </div>

                <div className="content">
                    <h3>best food in the country</h3>
                    <p>Since our modest beginnings in 2005 with a little space in Toronto's stylish Yorkville locale, La Casa de La Comida's development has been enlivened with the energy to cook and serve solid, Indian-roused takeout food.

                        Our menu highlights things that utilization the sound and fragrant flavors, however, forgets the stuffing ghee, spread, oil, and overwhelming cream.
                    </p>
                    <p> In contrast to other Indian eateries, La Casa de La Comida was made with the explicit expectation to appear as something else.

                        We realize numerous individuals love Indian sustenance, yet a large number of them loathe or are unconscious of the regularly unfortunate fixings that make run-of-the-mill Indian nourishment taste so great.</p>
                    <p>
                        La Casa de La Comida has developed to incorporate four superb takeout areas in Toronto with additional to come sooner rather than later. Our group takes pride in the way that we can furnish our new and faithful clients with extraordinary tasting Indian-roused nourishment that is not normal for that at some other Indian eatery you visit.
                        </p>
                    <p>We perceive that a few people are as yet searching for the run-of-the-mill Indian nourishment, and that is fine with us. Our disclaimer is that on the off chance that you're anticipating overwhelming, slick, undesirable Indian nourishment, La Casa de La Comida isn't the place for you.</p>
                    <div className="icons-container">
                        <div className="icons">
                            <i className="fas fa-shipping-fast"></i>
                            <span>free delivery</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-rupee-sign"></i>
                            <span>easy payments</span>
                        </div>
                        <div className="icons">
                            <i className="fas fa-headset"></i>
                            <span>24/7 service</span>
                        </div>
                    </div>
                    <a href="/" className="btn">learn more</a>
                </div>

            </div>

        </section>

    )
}

export default About
