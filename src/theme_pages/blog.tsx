import React from 'react'
import Footer from "../components/App/Footer"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import BlogGrid from '../components/BlogContent/BlogGrid'
import PageBanner from '../components/Common/PageBanner'

const Blog = () => {
    return (
        <Layout>
            <Navbar/>
            <PageBanner
                pageTitle="Blog"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Blog"
            />
            <BlogGrid/>
            <Footer/>
        </Layout>
    );
}

export default Blog;