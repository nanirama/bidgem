import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import OurMissionImg from "../../assets/images/our-mission/our-mission1.png";
import OurMissionImg from "../../../assets/images/bidgemmer/finalmacbook.png";
// import OurMissionShape1 from "../../../assets/images/our-mission/our-mission-shape1.png";
import BGShape3 from "../../../assets/images/bidgemmer/bg-shape03.png";

const HowItWork = () => {
    const { OurMissionImage, BGShapeImage } = useStaticQuery(
        graphql`
          query {           
            OurMissionImage: file(relativePath: {eq: "bidgemmer/finalmacbook.png"}) {
                childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    quality: 95
                    width: 717
                    height: 378
                    placeholder: BLURRED
                    formats: [WEBP, AVIF]
                )
                }
            }
            BGShapeImage: file(relativePath: {eq: "bidgemmer/bg-shape03.png"}) {
                childImageSharp {
                gatsbyImageData(
                    layout: FIXED
                    quality: 95
                    width: 717
                    height: 378
                    placeholder: BLURRED
                    formats: [WEBP, AVIF]
                )
                }
            }
          }
        `
      )
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
                            <GatsbyImage image={getImage(OurMissionImage)} alt="OurMissionImage" />
                            <div className="shape">
                            <GatsbyImage image={getImage(BGShapeImage)} alt="image" />                             
                            </div>                           
                            {/* <img loading="lazy" src={OurMissionImg} alt="image" width={717} height={378}/>
                            <div className="shape">
                                <img loading="lazy" src={BGShape3} alt="image" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork;