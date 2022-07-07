import {Link} from "gatsby";
import React from 'react'
import Layout from "../components/App/Layout"
import PrivacyPolicyContent from "../components/Bidgemmer/Blog/PrivacyPolicyContent";
import PageBanner from '../components/Bidgemmer/Common/PageBanner';

const PrivacyPolicy = (props) => {
    return (
        <Layout cpath = {props.location.pathname}>
            <PageBanner
                pageTitle="Privacy Policy"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Privacy Policy"
            />
            <section className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <PrivacyPolicyContent/>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <aside className="widget-area">
                                <div className="widget widget_insight">
                                    <ul>
                                        <li>
                                            <Link to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>
                                        <li className="active">
                                            <Link to="/privacy-policy">
                                                Privacy Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cookie-policy">
                                                Cookie Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/terms-of-use">
                                                Terms of Use
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default PrivacyPolicy;