import React, {useMemo} from 'react'
import Layout from "../../components/App/Layout"
import BlogDetails from "../../components/Bidgemmer/Blog/BlogDetailsContent";
import PageBanner from '../../components/Bidgemmer/Common/PageBanner'

import {posts} from './index';

const BlogPage = (props) => {
    const postId = 'can-a-pandemic-finally-push-the-diamond-trade-into-the-digital-age';
    const post = useMemo(() => posts.find(p => p.id === postId), []);
    if (!post) return;
    return (
        <Layout title={post.title} description={post.description} cpath = {props.location.pathname}>
            <PageBanner
                pageTitle={post.title}
                homePageText="Blog"
                homePageUrl="/blog"
                activePageText={post.title}
            />
            <BlogDetails post={post}/>
        </Layout>
    );
}

export default BlogPage;