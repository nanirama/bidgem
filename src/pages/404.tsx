import React from 'react'
import {Link} from 'gatsby'
import logo from "../assets/images/bidgemmer/logo.svg"

const NotFoundPage = () => {

    return (
        <>
            <div className="page-not-found-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="coming-soon-content">
                            <Link to="/" className="logo">
                                <img src={logo} alt="BidGemmer" style={{width: 200}}/>
                            </Link>
                            <h2>Page not found</h2>

                            <Link to="/">Go home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NotFoundPage