import React from 'react'
import FloatingElements from './FloatingElements'
import heroImage from '../Images/photo-hero.png'
import '../CSS/hero.css'

function HeroSection() {
  return (
    <section className='hero-section'>
        <FloatingElements />
        <div className="hero-content">
                <h1>
                Create Stunning 
                Email Campaigns
                </h1>
            <img className='mobile-img' src={heroImage} alt="" />
                <p>
                Create and launch email campaigns that captivate
                your customers in just a few clicks.
                </p>
                <div className="button-wrapper">
                <button>TRY NOW</button>
                <button>GET A DEMO</button>
                </div>
        </div>
            <img src={heroImage} alt="" />
    </section>
  )
}

export default HeroSection