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
                        <div className="circle" />
                        <h1> Discover <br />
                            Most Suitable <br />
                            Property</h1>
                    </div>

                    <div className="flexColStart secondaryText  hero-des">
                        <span> Find a variety of properties that suit you very easilty</span>
                        <span> Forget all difficulties in finding a residence for you</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type="text" />
                        <button className='button'>Search</button>
                    </div>

                    <div className="flexCenter stats">

                        <div className="flexColCenter stat">

                            <span><CountUp start={300} end={1500} duration={4} /> <span className='plus'>+</span> </span>
                            <span className='secondaryText'>Premium Product</span>
                        </div>
                        <div className="flexColCenter stat">

                            <span><CountUp start={500} end={3000} duration={4} /> <span className='plus'>+</span> </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">

                            <span><CountUp  end={35} duration={4} /> <span className='plus'>+</span> </span>
                            <span className='secondaryText'>Award Wining</span>
                        </div>


                    </div>

                </div>

                <div className="hero-right">
                    <div className="img-container">
                        <img src="./hero-image.png" alt="Hero" width={100} />
                    </div>
                </div>

            </div>

        </section>



    )
}

export default Hero