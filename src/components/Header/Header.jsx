import React from 'react'
import './Header.css'
const Header = () => {
    return (

        <section className='h-wrapper'>

            <div className="flexCenter paddings innerWidth h-container">

                {/* Logo  */}

                {/* <img src="./logo.png" alt="logo" width={100} /> */}
                <a width={100}>Piscean Canvas</a>

                <div className="flexCenter h-menu">

                    <a href="">Home</a>
                    <a href="">The Artist</a>
                    <a href="">Artworks</a>
                    <a href="">Book Online</a>
                    <button className='button'>
                        <a href="">Contact</a>
                    </button>

                </div>


            </div>


        </section>



    )
}

export default Header