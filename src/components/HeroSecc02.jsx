import React from 'react'
import Slg01 from '../assets/sliderImg/Slide02.jpg'
import Slg02 from '../assets/sliderImg/Slide01.avif'
import Slg03 from '../assets/sliderImg/Slide03.jpg'

const HeroSecc02 = () => {
  return (
    <>
    <div className="container-C">
    <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Slg01} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ "fontFamily": '"Caveat", cursive'}}>Elevate Your Waffle Game</h1>
              <h4 className='text-secondary' style={{"fontFamily":'"Playwrite NZ", cursive' , fontWeight : "bolder"}}>
                And Get 50% off on your First Order!!
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slg02} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className='' style={{ "fontFamily": '"Caveat", cursive'}}>Bite into a Better Day</h1>
              <h4 className='text-dark' style={{"fontFamily":'"Playwrite NZ", cursive' , "fontWeight" : "bolder"}}>
                With Buy two Get One FREEE!!
              </h4>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Slg03} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ "fontFamily": '"Caveat", cursive'}}>Taste of Tradition, a Twist of Innovation</h1>
              <h4 className='text-secondary' style={{"fontFamily":'"Playwrite NZ", cursive' , "fontWeight" : "bolder"}}>
                Get Free ICECREAM with Waffle on Every Saturday.
              </h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  )
}

export default HeroSecc02