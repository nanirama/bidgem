import React, {FC} from 'react'
import { useStaticQuery, graphql } from "gatsby"
import {Helmet} from "react-helmet"
import useSiteMetadata from "../useSiteMetadata";


export interface SEOProps {
    title?: string
    description?: string
}

const SEO: FC<SEOProps> = ({title, description, cpath}) => {

    const { SiteLogo } = useStaticQuery(
        graphql`
          query {           
            SiteLogo: file(relativePath: {eq: "siteLogo.png"}) {
             publicURL
           }
          }
        `
      )
    
    const siteMetadata = useSiteMetadata();
    const defaultTitle = `${siteMetadata.name} - ${title || siteMetadata.title}`;
    const canonicalUrl = cpath ? siteMetadata.siteUrl+cpath : siteMetadata.siteUrl

    const pImage = SiteLogo
    //console.log('curl', canonicalUrl)
    return (
        <div>
            <Helmet
                htmlAttributes={{
                    lang: 'en_US',
                }}
                title={defaultTitle}
                titleTemplate={defaultTitle}
                >
                <meta charSet="utf-8" />
                <title>{defaultTitle}</title>
                <meta name="description" content={description || siteMetadata.description}/>

                <meta name="og:locale" content='en_US' />
                <meta name="og:title" content={defaultTitle} />
                <meta name="og:url" content={canonicalUrl} />
                <meta name="og:description" content={description || siteMetadata.description} />
                <meta name="og:type" content="website" />
                <meta name="og:image" content={pImage} />
                <meta property="og:site_name" content={siteMetadata.name}/>


               <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content={siteMetadata?.author || ``} />
                <meta name="twitter:description" content={description || siteMetadata.description} />
                <meta name="twitter:url" content={canonicalUrl} />
                <meta name="twitter:image" content={pImage} />


                {/*<link rel="canonical" href="https://rewy-react.envytheme.com/"></link>*/}
                {/*<meta property="og:image"*/}
                {/*      content="https://res.cloudinary.com/dev-empty/image/upload/v1593069801/explore-learning.jpg"/>*/}

                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
                <link rel="manifest" href="/images/site.webmanifest"/>
                
            </Helmet>
        </div>
    )
}

export default SEO
