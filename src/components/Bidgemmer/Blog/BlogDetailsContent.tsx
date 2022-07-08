import React, {FC} from 'react'
import {BlogPostDetails} from "./BlogGrid";

import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

interface BlogDetailsContentProps {
    post: BlogPostDetails
}

const BlogDetailsContent: FC<BlogDetailsContentProps> = ({post}) => {
    if (!post) return;
    return (
        <section className="blog-details-area ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="blog-details-desc">
                            <div className="article-image">
                          
                            {/* <GatsbyImage image={post.image} alt={post.title} /> */}
                                <img loading="lazy" src={post.image} alt={post.title}/>
                                {/* <StaticImage src="../../../assets/images/bidgemmer/logo.svg" width={200} height={50} alt="Logo" /> */}
                                {/* <StaticImage src="{post.image}" alt={post.title} width={200} height={50} /> */}
                            </div>

                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                            <div>{post.createdAt.toLocaleDateString()}</div>
                                        </li>
                                    </ul>
                                </div>

                                {post.content}
                            </div>

                            <div className="article-author">
                                <div className="author-profile-header"></div>
                                <div className="author-profile">
                                    <div className="author-profile-title">
                                        {post.authorImage ?
                                            <img loading="lazy" src={post.authorImage} className="shadow-sm" alt={post.author}/>
                                            : <span className='icon shadow-sm'><i
                                                className='bx bxs-user'/></span>

                                        }
                                        <h4>{post.author}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetailsContent