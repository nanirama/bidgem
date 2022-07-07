import React from 'react'

import img1 from '../../assets/images/bidgemmer/blog/blog1.png';
import img2 from '../../assets/images/bidgemmer/blog/blog2.png';
import Layout from "../../components/App/Layout"
import BlogGrid, {BlogPostDetails} from '../../components/Bidgemmer/Blog/BlogGrid'
import Post01 from "../../components/Bidgemmer/Blog/Posts/Post01";
import Post02 from "../../components/Bidgemmer/Blog/Posts/Post02";
import PageBanner from '../../components/Bidgemmer/Common/PageBanner'


export const posts: Array<BlogPostDetails> = [
    {
        id: 'time-diamond-trade-to-think-beyond-covid-19-long-term-digital-solutions',
        title: 'Why it’s time for the diamond trade to think beyond COVID-19 with long-term digital solutions',
        description: 'COVID has impacted the rough diamond trade and we\'re poised to respond quickly with an innovative and relevant solution to restart trading.',
        image: img2,
        author: 'Aaron Wolf',
        createdAt: new Date('2020-12-21'),
        content: <Post02/>
    },
    {
        id: 'can-a-pandemic-finally-push-the-diamond-trade-into-the-digital-age',
        title: 'Can a pandemic finally push the diamond trade into the digital age?',
        description: 'COVID has impacted the rough diamond trade and we\'re poised to respond quickly with an innovative and relevant solution to restart trading.',
        image: img1,
        author: 'Aaron Wolf',
        createdAt: new Date('2020-05-22'),
        content: <Post01/>
    }
]

const Blog = (props) => {
    return (
        <Layout cpath = {props.location.pathname}>
            <PageBanner
                pageTitle="Blog"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Blog"
            />
            <BlogGrid posts={posts}/>
        </Layout>
    );
}

export default Blog;