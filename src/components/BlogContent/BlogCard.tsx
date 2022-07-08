import {Link} from 'gatsby'
import React, {FC} from 'react'

interface BlogGridProps {
    to: string
    image?: string
    authorImage?: string
    backgroundColor?: string
    title: string
    author?: string
    createdAt?: Date
}

const BlogGrid: FC<BlogGridProps> = ({to, image, authorImage, backgroundColor, title, author, createdAt}) => {
    return (
        <div className={`card single-blog-post ${backgroundColor}`}>
            {image &&
            <div className="post-image">
                <img loading="lazy" src={image} alt={title}/>
            </div>
            }

            <div className="post-content">
                <ul className="post-meta d-flex justify-content-between align-items-center">
                    {author &&
                    <li>
                        <div className="post-author d-flex align-items-center">
                            {authorImage
                                ? <img loading="lazy" src={authorImage} className="rounded-circle" alt={author}/>
                                : <span className='icon rounded-circle mr-1'><i className='bx bxs-user'/></span>
                            }
                            <span>{author}</span>
                        </div>
                    </li>
                    }
                    <li>
                        <i className='flaticon-calendar'></i>&nbsp;{createdAt?.toLocaleDateString()}
                    </li>
                </ul>
                <h3>
                    <Link to={to} className='stretched-link'>
                        {title}
                    </Link>
                </h3>
            </div>
        </div>
    )
}

export default BlogGrid