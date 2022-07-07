import React, {useCallback} from 'react';
import ReactWOW from 'react-wow';
import MainBannerGems from "./MainBannerGems";

const MainBanner = () => {
    const onRequestDemo = useCallback(() => {
        const el = window.document.getElementById('request-demo');
        if (el) {
            const top = el.getBoundingClientRect().top;
            window.scroll({top, behavior: "smooth"})
        }

    }, []);

    const onLearnMore = useCallback(() => {
        const el = window.document.getElementById('how-it-work');
        if (el) {
            const top = el.getBoundingClientRect().top;
            window.scroll({top, behavior: "smooth"})
        }

    }, []);

    return (
        <div className="main-banner-area mb-5">
            <MainBannerGems/>
            <div className="container">
                <div className="banner-area-content">
                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                        <h1>Ultimate Auction Platform</h1>
                    </ReactWOW>

                    {/*<ReactWOW delay='.1s' animation='fadeInLeft'>*/}
                    {/*    <h3>Built for Diamonds</h3>*/}
                    {/*</ReactWOW>*/}

                    <ReactWOW delay='.1s' animation='fadeInLeft'>
                        <p>Manage and run tenders or auctions for the diamond & gemstone industries.</p>
                    </ReactWOW>

                    <ReactWOW delay='.1s' animation='fadeInRight'>
                        <div className='d-flex align-items-center justify-content-center'>
                            <div
                                className='d-flex flex-column flex-lg-row w-100 gap-2 gap-lg-4 align-items-baseline justify-content-center'
                                style={{maxWidth: '25rem'}}>
                                <button onClick={onRequestDemo} className="default-btn btn w-100">
                                    Get Started
                                    <i className="flaticon-right" style={{marginLeft: '0.5rem', marginRight: 0}}/>
                                </button>
                                <button onClick={onLearnMore} className="default-btn btn w-100">
                                    How it Works?
                                </button>
                            </div>
                        </div>
                    </ReactWOW>

                    {/*<ReactWOW delay='.1s' animation='fadeInUp'>*/}
                    {/*    <img src={MainImage} alt="image"/>*/}
                    {/*</ReactWOW>*/}
                </div>
            </div>
        </div>
    )
};

export default MainBanner;