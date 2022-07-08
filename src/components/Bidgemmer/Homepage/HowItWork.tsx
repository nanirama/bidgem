import React from 'react';
// import OurMissionImg from "../../assets/images/our-mission/our-mission1.png";

import { StaticImage } from "gatsby-plugin-image"

//import OurMissionImg from "../../../assets/images/bidgemmer/finalmacbook.png";

// import OurMissionShape1 from "../../../assets/images/our-mission/our-mission-shape1.png";

//import BGShape3 from "../../../assets/images/bidgemmer/bg-shape03.png";

const HowItWork = () => {
    return (
        <section className="our-mission-area ptb-100" id='how-it-work'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-content">
                            <div className="content">
                                <h2>How does it work?</h2>
                                <p>
                                    BidGemmer’s user-friendly interface makes it easy for your staff to manage sales and
                                    buyers to place bids.
                                </p>
                                <ul className="how-it-works-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Full personalization of the auction process for your needs
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Detailed reports and analysis of auction results
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        No need for technical training for any staff
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Priority support via phone, email, and live-chat
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-mission-image">
                        <StaticImage src="../../../assets/images/bidgemmer/finalmacbook.png" width={650} height={370} alt="OurMissionImg" />
                            {/* <img loading="lazy" src={OurMissionImg} alt="image"/> */}
                            <div className="shape">
                            <StaticImage src="../../../assets/images/bidgemmer/bg-shape03.png" width={666} height={477} alt="BGShape3" />
                            
                                {/* <img loading="lazy" src={BGShape3} alt="image"/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork;