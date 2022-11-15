import React from 'react'
import videoImg from '../Images/VIDEO.png'
import blackSlashs from '../Images/black-slashs.png'


function VideoSection() {
  return (
    <section className='video-section'>
        <img className='black-slashs' src={blackSlashs} alt="" />
        <h1>Reach More Customers</h1>
        <img className='video-img' src={videoImg} alt="" />
        <button>LEARN HOW</button>
    </section>
    )
}

export default VideoSection