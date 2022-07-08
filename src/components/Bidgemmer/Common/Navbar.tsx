import {Link} from 'gatsby'
import React, {useState} from 'react';
//import logo from "../../../assets/images/bidgemmer/logo.svg"

import { StaticImage } from "gatsby-plugin-image"

const Navbar = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const toggleNavbar = () => {
        setCollapsed(c => !c);
    }

    React.useEffect(() => {
        const elementId = document.getElementById("navbar");
        if (elementId) {
            document.addEventListener("scroll", () => {
                if (window.scrollY > 170) {
                    elementId.classList.add("is-sticky");
                } else {
                    elementId.classList.remove("is-sticky");
                }
            });
        }
        window.scrollTo(0, 0);
    })

    return (
        <>
            <div id="navbar" className="navbar-area">
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <Link
                            to="/"
                            onClick={() => setCollapsed(true)}
                            className="navbar-brand"
                        >
                            <StaticImage src="../../../assets/images/bidgemmer/logo.svg" width={200} height={50} alt="Logo" />
                            {/* <img src={logo} alt="logo" width={200} height={50} style={{width: 200}}/> */}
                        </Link>

                        <button onClick={toggleNavbar}
                                className={`navbar-toggler navbar-toggler-right ${collapsed ? 'collapsed' : ''}`}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="icon-bar top-bar"/>
                            <span className="icon-bar middle-bar"/>
                            <span className="icon-bar bottom-bar"/>
                        </button>

                        <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`}
                             id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/contact" activeClassName="active" className="nav-link">
                                        Contact Us
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/blog" activeClassName="active" className="nav-link">
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/get-started"
                                        activeClassName="active"
                                        onClick={() => setCollapsed(true)}
                                        className="default-btn"
                                    >
                                        Get Started<i className="flaticon-right"
                                                      style={{marginLeft: '0.5rem', marginRight: 0}}/>
                                    </Link>
                                </li>
                            </ul>
                            {/*<div className="others-option d-flex flex-column flex-lg-column align-items-center gap-3">*/}
                            {/*    <ul className="navbar-nav">*/}
                            {/*        <li className="nav-item">*/}
                            {/*            <Link to="/contact" activeClassName="active" className="nav-link">*/}
                            {/*                Contact Us*/}
                            {/*            </Link>*/}
                            {/*        </li>*/}

                            {/*        <li className="nav-item">*/}
                            {/*            <Link to="/blog" activeClassName="active" className="nav-link">*/}
                            {/*                Blog*/}
                            {/*            </Link>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}

                            {/*    <div className="option-item ml-lg-4">*/}
                            {/*        <Link*/}
                            {/*            to="/get-started"*/}
                            {/*            activeClassName="active"*/}
                            {/*            onClick={() => setCollapsed(true)}*/}
                            {/*            className="default-btn"*/}
                            {/*        >*/}
                            {/*            Get Started<i className="flaticon-right"*/}
                            {/*                          style={{marginLeft: '0.5rem', marginRight: 0}}/>*/}
                            {/*        </Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
