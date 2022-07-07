import {Link} from "gatsby";
import React from "react";

const CookiePolicyContent = () => {
    return (
        <div className="policy-content">
            <p>Please read this cookie policy along with our <Link to="/privacy-policy">Privacy Policy</Link>.</p>
            <p>Cookies are small files that websites save to your hard disk or to your browser’s memory. The cookies
                used on our platforms are listed below.</p>
            <p>You have the ability to accept or decline cookies. Most Internet browsers automatically accept
                cookies, but you can typically modify your internet browser settings to decline cookies or to notify
                you when a cookie is being placed on your computer. If you continue to use BidGemmer without
                changing your browser settings, we will use cookies as set out in this cookie policy. If you choose
                to use your browser settings to decline, disable, reject or block cookies, you may not be able to
                fully experience the features of our platform or other websites that you visit.</p>
            <p>To learn more about cookies and how to disable them we recommend you visit the Information
                Commissioner’s website&nbsp;<a href="https://ico.org.uk/your-data-matters/online/cookies/">here</a>.
            </p>
            <p>The cookies we use fall into the following categories:</p>
            <p>Strictly necessary cookies: These cookies are essential for our platform and software to function. If
                you adjust your browser settings to decline these cookies our platforms and software will not
                function properly, and in some cases at all.</p>
            <p>Analytic cookies: These cookies allow us to monitor the use of our platforms. For example, we use
                reports provided by Hotjar to help us understand website traffic and webpage usage. Hotjar cannot
                function without the use of cookies and details of the cookies used by Hotjar can be found in the
                table below as well as information on how to delete them.</p>
            <p>Marketing cookies: These cookies collect information about your browsing habits and are used to
                deliver adverts to you that are more relevant to you. They are usually placed by third party
                advertising networks. You can learn more about third-party marketing cookies and how to delete
                them&nbsp;<a href="http://www.youronlinechoices.com/">here</a>.</p>
            <p>Our platforms use the following cookies:</p>
            <table className='table table-sm table-bordered'>
                <thead>
                <tr>
                    <td>Cookie Type</td>
                    <td>Cookie</td>
                    <td>Purpose/More Information</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td rowSpan={2} width="96">Hotjar</td>
                    <td>
                        <code>_hjAbsoluteSessionInProgress</code> and <code>_hjIncludedInPageviewSample</code></td>
                    <td>
                        <strong>Used to distinguish users in Analytics.</strong>
                        <p>
                            You can opt-out of Hotjar cookies altogether by using this&nbsp;<a
                            href="https://www.hotjar.com/privacy/do-not-track/">Hotjar Do Not Track</a>. More
                            information about how Hotjar collects and uses data can be found&nbsp;<a
                            href="https://www.hotjar.com/legal/policies/terms-of-service/">here</a>.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td><code>_hjid</code> and <code>_hjTLDTest</code></td>
                    <td>
                        <strong>Used to distinguish users in Analytics.</strong>
                        <p>
                            You can opt-out of Hotjar cookies altogether by using this&nbsp;<a
                            href="https://www.hotjar.com/privacy/do-not-track/">Hotjar Do Not Track</a>. More
                            information about how Hotjar collects and uses data can be found&nbsp;<a
                            href="https://www.hotjar.com/legal/policies/terms-of-service/">here</a>.
                        </p>
                    </td>
                </tr>
                <tr>
                    <td>Session</td>
                    <td><code>sails.sid</code></td>
                    <td>User Login Session Management</td>
                </tr>
                <tr>
                    <td>Availability</td>
                    <td><code>AWSALB</code> and <code>AWSALBCORS</code></td>
                    <td>High availability Service</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CookiePolicyContent;