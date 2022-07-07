import React from 'react'
import icon1 from '../../../assets/images/funfacts/fun-icon1.png'
import icon2 from '../../../assets/images/funfacts/fun-icon2.png'
import icon3 from '../../../assets/images/funfacts/fun-icon3.png'
import icon4 from '../../../assets/images/funfacts/fun-icon4.png'

const Funfacts = () => {
    return (
        <div className="funfacts-area pb-70">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-3 col-md-6">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <i className="flaticon-team"/>
                            </div>
                            <h3>10+ Years</h3>
                            <p>In the market</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <i className="flaticon-price-tag"/>
                            </div>
                            <h3>150.7M+</h3>
                            <p>Carats Sold</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <i className="flaticon-money"/>
                            </div>
                            <h3>$180B</h3>
                            <p>Value Sold in Auctions</p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-3 col-md-6">
                        <div className="single-funfacts-box">
                            <div className="icon">
                                <i className="flaticon-tick"/>
                            </div>
                            <h3>100%</h3>
                            <p>Satisfaction rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Funfacts