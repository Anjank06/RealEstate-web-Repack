import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
    return (

        <section className='hero-wrapper'>

            <div className="innerWidth paddings flexCenter hero-container">

                <div className=" flexColStart hero-left">

                    <div className="hero-title">
                        {/* <div className="circle"/> */}
                        <h1> Discover</h1>
                        <h1> The world of art<br/> by Chandana </h1>
                    </div>

                    <div className="flexColStart secondaryText  hero-des">
                        <span> Find from a variety of paintings that suit you</span>
                        <span> Forget all difficulties in you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>

                    <div className="flexCenter stats">

                        <div className="flexColCenter stat">

                            <span><CountUp start={300} end={1500} duration={5} /> <span className='plus'>+</span> </span>
                            <span className='secondaryText'>Premium Product</span>
                        </div>
                        <div className="flexColCenter stat">

                            <span><CountUp start={500} end={3000} duration={4} /> <span className='plus'>+</span> </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>

                    </div>

                </div>

                <div className="hero-right">
                    <div className="img-container">
                        <img src="./Pics/Chandana.jpeg" alt="Hero" />
                    </div>
                </div>

            </div>

        </section>



    )
}

export default Hero