import React, { FC } from 'react';
import Layout from '../components/App/Layout'


const FreeDemo: FC = (props) => {
    return (
        <Layout cpath={props.location.pathname}>
            <div className='freedemoouter'>
                <div className="container">
                   
                        <div className='demobanner'>
                            <div className='demotxt'>
                                <h2>Get a Free Demo of BidGemmer’s auction software</h2>
                                <p>BidGemmer’s auction software is everything you need to streamline your diamond or gemstone business, improve sales, and prove ROI — backed by a support team that helps you grow.</p>
                            </div>
                        </div>
                   
                </div>
            </div>
            <div className='democontent'>
                <div className="container">
                   
                        <div className='contenttxt'>
                            <p>With BidGemmer’s auction and tender software, you’ll be able to …</p>
                            <ul>
                                <li>Customize your auction/tender platform without help from IT</li>
                                <li>Buyers can easily bid from any type of device</li>
                                <li>Secure platform protected by 256-bit SSL encryption</li>
                                <li>100% Auditable allowing full transparency</li>
                                <li>Confidently report your impact on the bottom line</li>
                            </ul>
                            <p>…all in one place.</p>
                            <p>See for yourself! Fill out the form to schedule a free demo customized for your specific tender and auction needs, or give us a call at +1-530-436-6377.</p>
                        </div>

                        <div className='formouter'>
                            <div className='form_inner'>
                                <h2>Yes, I want a demo</h2>
                                <div className='demoform'>
                                    <div className='formbox'>
                                        <div className='forminput'>
                                            <label>First Name*</label>
                                            <input type="text" value="" className='forminp' />
                                        </div>
                                        <div className='forminput'>
                                            <label>Last Name*</label>
                                            <input type="text" value="" className='forminp' />
                                        </div>
                                    </div>
                                    <div className='formbox'>
                                        <div className='forminput'>
                                            <label>Email*</label>
                                            <input type="text" value="" className='forminp' />
                                        </div>
                                        <div className='forminput'>
                                            <label>Phone Number*</label>
                                            <input type="text" value="" className='forminp' />
                                        </div>
                                    </div>
                                    <div className='formbox'>
                                        <div className='forminput'>
                                            <label>Company Name*</label>
                                            <input type="text" value="" className='forminp' />
                                        </div>
                                        <div className='forminput'>
                                            <label>Website URL*</label>
                                            <input type="text" value="" className='forminp' />
                                        </div>
                                    </div>
                                    <div className='formbox'>
                                        <div className='forminput1'>
                                            <label>How many employees work there?*</label>
                                            <select>
                                                <option value="">1</option>
                                                <option value="">2 to 5</option>
                                                <option value="">6 to 10</option>
                                                <option value="">11 to 25</option>
                                                <option value="">26 to 50</option>
                                                <option value="">51 to 200</option>
                                                <option value="">201 to 1000</option>
                                                <option value="">1001 to 10000</option>
                                                <option value="">10001 or more</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='formbox'>
                                        <div className='forminput1'>
                                            <label>Does your company sell any of the following services:*</label>
                                            <ul>
                                                <li>Manufactuer</li>
                                                <li>Preparer</li>
                                                <li>Retailer</li>
                                                <li>Broker</li>
                                                <li>Dealer</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='formbox'>
                                        <div className='forminput1'>

                                            <select>
                                                <option value="">Yes</option>
                                                <option value="">No</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className='formbox'>
                                        <div className='formcheck'>
                                            <input type="checkbox" /><span>Subscribe to Bigdemmer</span>

                                        </div>
                                    </div>
                                    <p>We're committed to your privacy. BidGemmer LTD uses the information you provide to us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our
                                        <br /><a href="#">Privacy Policy.</a></p>
                                    <input type="submit" value="get your free demo" className='inp_submit' />

                                </div>
                            </div>

                       
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default FreeDemo;