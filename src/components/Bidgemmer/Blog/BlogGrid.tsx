import React, {FC, ReactNode} from 'react'
import BlogCard from '../../BlogContent/BlogCard'

export interface BlogPostDetails {
    id: string
    title: string
    description?: string
    createdAt: Date
    author?: string
    image?: string
    authorImage?: string
    content?: ReactNode
}

interface BlogGridProps {
    posts: Array<BlogPostDetails>
}

const BlogGrid: FC<BlogGridProps> = ({posts}) => {
    return (
        <div className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    {posts.map(post => {
                        return (
                            <div key={post.id} className="col-lg-4 col-md-6">
                                <BlogCard
                                    title={post.title}
                                    author={post.author}
                                    to={`/blog/${post.id}`}
                                    image={post.image}
                                    createdAt={post.createdAt}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BlogGrid