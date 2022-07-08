import {Link} from 'gatsby'
import React, {useCallback} from 'react'
import gem1 from "../../../assets/images/bidgemmer/gems/gems-02.svg";
import logo from "../../../assets/images/bidgemmer/logo.svg"
// import footerMap from "../../../assets/images/footer-map.png"
import footerMap from "../../../assets/images/bidgemmer/world-map.svg"
import useSiteMetadata from "../../useSiteMetadata";

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const siteMetadata = useSiteMetadata();

    const onSupportClick = useCallback(() => {
        const chatApp = (window as any).tidioChatApi;
        if (!!chatApp) {
            chatApp.show();
            chatApp.open();
        }
    }, []);

    return (
        <footer className="footer-area bg-color">
            <div className='footer-img-container d-none d-xl-block'>
                <img src={gem1} loading='lazy' alt='image of a gem'
                     className='position-relative img-gems d-none d-xl-block'
                     style={{right: 'calc(-100vw + 150px + 3rem)', top: '-6rem', width: 150, height: 'auto'}}/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className="single-footer-widget">
                            <a href="/" className="logo">
                                <img src={logo} style={{width: 200}} alt={siteMetadata.name}/>
                            </a>
                            <p>Ultimate Auction Platform</p>
                            <p>
                                Call, email, live chat us — whatever works for you.
                                <br/>
                                We’ll be here.
                            </p>
                            <ul className="social-link mt-5">
                                <li>
                                    <Link to="https://www.facebook.com/bidgemmer" className="d-block" target="_blank"
                                          rel="noreferrer">
                                        <i className='bx bxl-facebook'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/BidGemmer" className="d-block" target="_blank"
                                          rel="noreferrer">
                                        <i className='bx bxl-twitter'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/bidgemmer_tech/" className="d-block"
                                          target="_blank" rel="noreferrer">
                                        <i className='bx bxl-instagram'></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/bidgemmer/" className="d-block"
                                          target="_blank" rel="noreferrer">
                                        <i className='bx bxl-linkedin'></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 offset-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Help & Support</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <a href='https://bidgemmer.freshdesk.com/support/login'
                                       target="_blank" rel="noreferrer">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <button onClick={onSupportClick}>
                                        Get Support
                                    </button>
                                </li>
                                <li>
                                    <a href='mailto:info@bidgemmer.com'>
                                        Email us at info@bidgemmer.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Contact Us</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+15304366377">US: +1-530-436-6377</a>
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+972583326599">IL: +972-58-332-6599</a>
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+971521588467">AE: +971-52-158-8467</a>
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+3223420409">BE: +32-2-342-04-09</a>
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href="tel:+85281245899">HK: +852-8124-5899</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright @{currentYear} <strong>{siteMetadata.name}</strong>. All rights reserved.
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-use">
                                        Terms of Use
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-map">
                <img loading="lazy" src={footerMap} alt="world_map"/>
            </div>
        </footer>
    );
}

export default Footer;