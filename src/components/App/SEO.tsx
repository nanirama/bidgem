import React, {FC} from 'react'
import {Helmet} from "react-helmet"
import useSiteMetadata from "../useSiteMetadata";

export interface SEOProps {
    title?: string
    description?: string
}

const SEO: FC<SEOProps> = ({title, description, cpath}) => {
    
    const siteMetadata = useSiteMetadata();
    const defaultTitle = `${siteMetadata.name} - ${title || siteMetadata.title}`;
    const canonicalUrl = cpath ? siteMetadata.siteUrl+cpath : siteMetadata.siteUrl
    console.log('curl', canonicalUrl)
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <meta charSet="utf-8" />
                <title>{defaultTitle}</title>
                <meta name="description" content={description || siteMetadata.description}/>
                <meta name="og:title" property="og:title" content={defaultTitle}/>
                <meta name="og:description" property="og:title" content={description || siteMetadata.description}/>
                <meta property="og:url" content={siteMetadata.siteUrl}/>
                <meta property="og:site_name" content={siteMetadata.name}/>
                <meta name="twitter:card" content={defaultTitle}/>
                {/*<link rel="canonical" href="https://rewy-react.envytheme.com/"></link>*/}
                {/*<meta property="og:image"*/}
                {/*      content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"/>*/}

                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
                <link rel="manifest" href="/images/site.webmanifest"/>
                <link rel="canonical" href={canonicalUrl} />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
            </Helmet>
        </div>
    )
}

export default SEO
