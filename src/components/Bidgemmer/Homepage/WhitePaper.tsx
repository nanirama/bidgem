import {Link} from "gatsby";
import React, {useState} from 'react';
import DownloadPaperModal from "./DownloadPaperpModal";

const WhitePaper = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <section className="projects-area bg-color pt-100 pb-70">
            <DownloadPaperModal show={showModal} onHide={()=>setShowModal(false)}/>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title text-accent-2">
                        Free Whitepaper
                    </span>
                    <h2>The True Cost of Building Your Enterprise Auction Platform</h2>
                    <p>
                        From in-house development to specialized SaaS solutions, how do you know which solution is right
                        for you?
                    </p>
                </div>

                <div className="row">
                    <div className="col d-flex justify-content-center text-center">
                        <button onClick={() => setShowModal(true)} className="default-btn">
                            Download now for free!
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhitePaper;