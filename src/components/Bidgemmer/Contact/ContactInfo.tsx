import {Link} from "gatsby";
import React from 'react'

const ContactInfo = () => {
    return (
        <div className="contact-info-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-envelope'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-envelope'></i>
                            </div>
                            <h3>Email</h3>
                            <p><a href="mailto:info@bidgemmer.com">info@bidgemmer.com</a></p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-phone-call'></i>
                            </div>
                            <h3>Phone</h3>
                            <p><a href="tel:+15304366377">US: +1-530-436-6377</a></p>
                            <p><a href="tel:+972583326599">IL: +972-58-332-6599</a></p>
                            <p><a href="tel:+971521588467">AE: +971-52-158-8467</a></p>
                            <p><a href="tel:+3223420409">BE: +32-2-342-04-09</a></p>
                            <p><a href="tel:+85281245899">HK: +852-8124-5899</a></p>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6">
                        <div className="contact-info-box">
                            <div className="back-icon">
                                <i className='bx bx-message-dots'></i>
                            </div>
                            <div className="icon">
                                <i className='bx bx-message-dots'></i>
                            </div>
                            <h3>Social</h3>

                            <p>
                                <Link to="https://www.facebook.com/bidgemmer" className="d-block" target="_blank"
                                      rel="noreferrer">
                                    <i className='bx bxl-facebook'></i> Facebook <b>@BidGemmer</b>
                                </Link>
                            </p>
                            <p>
                                <Link to="https://twitter.com/BidGemmer" className="d-block" target="_blank"
                                      rel="noreferrer">
                                    <i className='bx bxl-twitter'></i> Twitter <b>@BidGemmer</b>
                                </Link>
                            </p>
                            <p>
                                <Link to="https://www.instagram.com/bidgemmer_tech/" className="d-block"
                                      target="_blank" rel="noreferrer">
                                    <i className='bx bxl-instagram'></i> Instagram <b>@BidGemmer</b>
                                </Link>
                            </p>
                            <p>
                                <Link to="https://www.linkedin.com/company/bidgemmer/" className="d-block"
                                      target="_blank" rel="noreferrer">
                                    <i className='bx bxl-linkedin'></i> LinkedIn <b>@BidGemmer</b>
                                </Link>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactInfo