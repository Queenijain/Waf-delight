import React from 'react'
import Box1 from '../assets/boxImages/boxIg01.avif'
import Box2 from '../assets/boxImages/boxIg02.jpg'
import Box3 from '../assets/boxImages/boxIg03.jpeg'
import { Link } from 'react-router-dom'

const HeroSecc03 = () => {
  return (
    <>
    <div className="container-5" id='background02'>
        <h1 className='text-center pt-5 text-light' style={{"fontFamily": '"Dancing Script", cursive' , "fontWeight" : "bolder" }}>Sweet Treats for Every Craving</h1>
        <h2 className='text-center text-light p-3' style={{"fontFamily": '"Dancing Script", cursive' , "fontWeight" : "bold"}}> WE SERVE</h2>
        <div className="three-box d-flex align-items-center justify-content-evenly flex-wrap p-5">
            <Link to={"/waffle"} className="box m-2">
                <img src={Box1} alt="" />
            </Link>
            <Link to={"/icecream"} className="box m-2">
                <img src={Box2} alt="" />
            </Link>
            <Link to={"/cake"} className="box m-2">
                <img src={Box3} alt="" />
            </Link>
        </div>
    </div>
    </>
  )
}

export default HeroSecc03