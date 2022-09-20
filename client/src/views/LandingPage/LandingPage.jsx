import React from 'react';
import {Link} from 'react-router-dom';
import Carrousel from '../Carousel/Carousel';
import AboutUs from '../AboutUs/AboutUs';
import './LandingPage.css';

export default function LandingPage(){

    return(
        <div className='containerLanding'>
            <div className='firstContactLanding'>
                <h1 className='titleLanding'>THE BEST E-COMMERCE DEDICATED TO YOUR FAVORITE MUSICAL INSTRUMENTS</h1>
                <hr className='divider' />
                <span className='textLanding'>In B. Goode you can buy a great variety of instruments that we put at your disposal, besides being able to sell that instrument that you no longer use</span>
                <Link to='/home'>
                    <button type="button" className="buttonSlide">
                        <div>Shop Now</div>
                        <i className="icon-arrow-right"></i>
                    </button>
                </Link>
            </div>

            <div className='landingCarousel'>
                <h2>Popular products:</h2>
                <hr className='divider2' />
                <Carrousel />
            </div>

            <div className='landingAboutUs'>
                <AboutUs />
            </div>
        </div>
    )
}