import React from 'react'
import Layout from "../components/App/Layout"
import PageBanner from '../components/Bidgemmer/Common/PageBanner'
import ContactForm from "../components/Bidgemmer/Contact/ContactForm";
import ContactInfo from '../components/Bidgemmer/Contact/ContactInfo'

const Contact = (props) => {
    return (
        <Layout cpath = {props.location.pathname}>
            <PageBanner
                pageTitle="Contact Us"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Contact Us"
            />
            <ContactInfo/>
            <ContactForm/>
        </Layout>
    );
}

export default Contact