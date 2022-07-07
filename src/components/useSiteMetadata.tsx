import {graphql, useStaticQuery} from 'gatsby'

const useSiteMetadata = () => {
    const {site} = useStaticQuery(siteMetadataQuery)
    return site.siteMetadata
}

const siteMetadataQuery = graphql`
  fragment BlocksSiteMetadata on Site {
    siteMetadata {
      name
      title
      description
      siteUrl
    }
  }
  query BlocksSiteMetadataQuery {
    site {
      ...BlocksSiteMetadata
    }
  }
`
export default useSiteMetadata
