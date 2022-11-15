import React from 'react'
import Card from './Card'
import CaseStudy from './CaseStudy'
//Images
import thumb1 from '../Images/thumb1.png'
import thumb2 from '../Images/thumb2.png'
import caseImg1 from '../Images/case-study-pic1.png'
import caseImg2 from '../Images/case-study-pic2.png'
import caseImg3 from '../Images/case-study-pic3.png'
import lastKnight from '../Images/last-knight.png'
import dragonEye from '../Images/dragon-eye.png'
import questAi from '../Images/quest-ai.png'
import radioTree from '../Images/radio-tree.png'
import gameCommerce from '../Images/game-commerce.png'
import Footer from './Footer'
import whiteSlashs from '../Images/white-slashs.png'







function ThirdSection() {
  return (
      <section className='third-section'>
        <div className="floating-elements2">
          <img src={whiteSlashs} alt="" />
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="cards-wrapper">
        <Card img={thumb1} txt='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.' />
        <Card
        img={thumb2}
        txt='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.' />
        <div className='cards-info'>
            <h1>
            The source for proven, engaging email campaigns
            </h1>
            <p>
            Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business. 
            </p>
        </div>
        </div>
        <div className="case-study">
       <CaseStudy img={caseImg1} name='Frankie' date='Member since 2016' />
       <CaseStudy img={caseImg2} name='Camile' date='Member since 2012' />
       <CaseStudy img={caseImg3} name='Elayne' date='Member since 2018' />
        </div>
        <h1 className='brands-heading'>All the best brands already use us.</h1>
        <div className="brands">
          <img src={lastKnight} alt="" />
          <img src={dragonEye} alt="" />
          <img src={questAi} alt="" />
          <img src={radioTree} alt="" />
          <img src={gameCommerce} alt="" />
        </div>
        <div className="plan">
          <h1>Get Started today!</h1>
          <button>PICK A PLAN</button>
        </div>
        <Footer />
      </section>
    )
}

export default ThirdSection