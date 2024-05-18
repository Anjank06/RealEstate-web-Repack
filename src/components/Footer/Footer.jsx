import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <section className="f-wrapper">

            <div className="paddings innerwidth flexCenter f-container">

                {/* left side */}

                <div className="flexColStart f-left">

                    {/* <img src="./logo2.png" alt="logo" width={120} /> */}
                    <a width={100} id="thick" class="navbar-brand"><span class="greenfooter">P</span>
                    <span class="maroonfooter">iscean </span>
                    <span class="greenfooter">C</span>
                    <span class="maroonfooter">anvas</span></a>

                    <span className='secondaryText'>
                        Our vision is to make all people <br />
                        the best place to live for them.
                    </span>

                </div>


                {/* Right side  */}

                <div className="flexColStart f-right">

                    <h1 style={{color:'blue'}}>Information</h1>
                    <span className="secondaryText">Chack Jhumra ,FSD,PUNJAB ,PAKISTAN</span>

                    <div className="flexCenter menu">
                        <span>Gallery</span> <span>Service</span><span>Product</span><span>About Us</span>
                    </div>

                </div>


            </div>

<div className="secondaryText rights">&copy; All Rights Reserved by Anjan Kumar</div>

        </section>
    )
}

export default Footer