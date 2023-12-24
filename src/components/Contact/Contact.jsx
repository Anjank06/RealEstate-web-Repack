import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* left side  */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className="secondaryText">We always ready to help by providijng the best services for you. <br /> We beleive a good blace to live can make your life better</span>

                    <div className="flexColStart contactModes">
                        {/* first row  */}

                        <div className="flexStart row">
                            {/* first mode  */}

                            <div className="flexColCenter mode">

                                {/* <div className="flexStart"> */}

                                <div className="flexColStart detail">
                                    <span className='primaryText call'>Call</span>
                                    <span className='secondaryText call'>+92 344 6339291</span>
                                </div>

                                {/* </div> */}

                                <div className="flexCenter button">Call Now </div>

                            </div>

                            {/* second mode  */}


                            <div className="flexColCenter mode">

                                {/* <div className="flexStart"> */}

                                    <div className="flexColStart detail">
                                        <span className='primaryText call'>Chat</span>
                                        <span className='secondaryText call'>+92 344 6339291</span>
                                    </div>

                                {/* </div> */}

                                <div className="flexCenter button">Chat Now </div>

                            </div>


                        </div>

                       {/* Second row  */}

                       <div className="flexStart row">
                            {/* third mode  */}

                            <div className="flexColCenter mode">

                                {/* <div className="flexStart"> */}

                                <div className="flexColStart detail">
                                    <span className='primaryText call'>Message</span>
                                    <span className='secondaryText call'>+92 344 6339291</span>
                                </div>

                                {/* </div> */}

                                <div className="flexCenter button">Message Now </div>

                            </div>

                            {/* forth mode  */}


                            <div className="flexColCenter mode">

                                {/* <div className="flexStart"> */}

                                    <div className="flexColStart detail">
                                        <span className='primaryText call'>Video Call</span>
                                        <span className='secondaryText call'>+92 344 6339291</span>
                                    </div>

                                {/* </div> */}

                                <div className="flexCenter button">Video Call Now </div>

                            </div>


                        </div>


                    </div>


                </div>
                {/* right side  */}
                <div className=" c-right ">
                    <div className="img-container">
                        <img src="contact.jpg" alt="Contact" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact