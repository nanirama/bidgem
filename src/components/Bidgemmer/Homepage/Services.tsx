import React from 'react'
import BGShape3 from "../../../assets/images/bidgemmer/bg-shape03.png";
// import aboutImg1 from '../../../assets/images/bidgemmer/undraw_pie_graph_re_fvol.svg'
import aboutImg1 from '../../../assets/images/bidgemmer/image-circle.svg'

const Services = () => {
    return (
        <section className="overview-area ptb-100">
            <div className="container">
                <div className="overview-box">
                    <div className="overview-content">
                        <div className="content">
                            <h2 className='text-primary'>Providing full 360° solution</h2>
                            <p>For managing your auctions and tenders and more.</p>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Lower TCO</h4>
                                <p>No hardware or software needed to purchase/install</p>
                            </div>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Transparent Pricing</h4>
                                <p>Simple pricing model allows you to forecast costs</p>
                            </div>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> No Licenses or downloads</h4>
                                <p>Your software is always up-to-date</p>
                            </div>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> Managed Services</h4>
                                <p>We provide a dedicated platform team</p>
                            </div>

                            <div className="features-text">
                                <h4><i className="flaticon-tick"></i> No Extra IT</h4>
                                <p>No need to hire or train new IT staff, support is on us!</p>
                            </div>
                        </div>
                    </div>

                    <div className="overview-image d-none d-lg-block">
                        <div className="our-mission-image">
                            <img loading="lazy" src={aboutImg1} alt="about"/>
                            <div className="shape">
                                <img loading="lazy" src={BGShape3} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;