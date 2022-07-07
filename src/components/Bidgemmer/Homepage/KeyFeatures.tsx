import React from 'react'

const KeyFeatures = () => {
    return (
        <section className="services-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Key Features</h2>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>*/}
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <i className="flaticon-stopwatch"/>
                            </div>
                            <h3>5 Minute Setup</h3>
                            <p>
                                Within a matter of minutes you can setup and customize the platform to run your first
                                auction!
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <i className="flaticon-settings"/>
                            </div>
                            <h3>Personalize and company branding</h3>
                            <p>
                                You will be able to configure the auction to your needs and fully brand the interface to
                                give your company top notch visibility.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item ">
                            <div className="icon">
                                <i className="flaticon-idea"/>
                            </div>
                            <h3>Ease of Use</h3>
                            <p>
                                Simplistic user centric design created to help any user administer auction or bid on the
                                lots they choose.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <i className="flaticon-rocket"/>
                            </div>
                            <h3>Scalable</h3>
                            <p>
                                Whether you intend to have 10 or 1000 Bidders, BidGemmer is prepared to handle traffic
                                so you don’t notice any difference.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <i className="flaticon-lock"/>
                            </div>
                            <h3>Security</h3>
                            <p>
                                All data is stored in highly secure data centers. All communications are encrypted via
                                SSL using 2048-bit certificates, the same level security that banks use.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="single-services-box-item">
                            <div className="icon">
                                <i className="flaticon-order"/>
                            </div>
                            <h3>Reliable</h3>
                            <p>
                                Servers and infrastructure running in multiple geographic regions to provide you
                                guaranteed up-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KeyFeatures;