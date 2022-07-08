require("dotenv").config();
import type {GatsbyConfig} from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        name: `BidGemmer LTD`,
        title: `The Best Auction Technology for the Diamond Industry`,
        description: `BidGemmer is a leading provider of auction software for diamond companies to easily administer diamond auctions without need of technical expertise`,
        siteUrl: `https://timely-cobbler-695512.netlify.app`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "UA-89532045-1"
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
              createLinkInHead: true,
            }      
          },
          {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
              host: 'https://timely-cobbler-695512.netlify.app',
              sitemap: 'https://timely-cobbler-695512.netlify.app/sitemap/sitemap-0.xml',
              env: {
                development: {
                  policy: [{ userAgent: '*', disallow: ['/'] }]
                },
                production: {
                  policy: [{ userAgent: '*', allow: '/' }]
                }
              }
            }
          },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: "BidGemmer",
                short_name: "BidGemmer",
                start_url: "/",
                icon: "src/images/favicon-32x32.png",
                display: "standalone",
            }
        },
        {
          resolve: `gatsby-plugin-sharp`,
          options: {
            defaults: {
              formats: [`auto`, `webp`],
              placeholder: `blurred`,
              quality: 100,
              backgroundColor: `transparent`,
              webpOptions: {quality: 100}
            }
          }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sass",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": `assets/images`,
                "path": `${__dirname}/src/assets/images/`
            },
            __key: "assets/images"
        },
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "bidgemmer-website",
                region: 'eu-west-1',
                acl: 'aws-exec-read',
                protocol: 'https',
                hostname: 'www.bidgemmer.com',
            },
        },
        {
            resolve: 'gatsby-plugin-zeit-now',
            options: {
              globalHeaders: {
                'referrer-policy': 'same-origin',
                'feature-policy':
                  "geolocation 'self'; microphone 'self'; camera 'self'",
                'expect-ct': 'max-age=604800, enforce',
                'strict-transport-security': 'max-age=31536000; includeSubDomains',
                'x-frame-options': 'DENY',
                'x-xss-protection': '1; mode=block',
                'x-content-type-options': 'nosniff',
                'x-download-options': 'noopen'
              }
            }
          },
          {
            resolve: `gatsby-plugin-csp`,
            options: {
              disableOnDev: true,
              reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
              mergeScriptHashes: true, // you can disable scripts sha256 hashes
              mergeStyleHashes: true, // you can disable styles sha256 hashes
              mergeDefaultDirectives: true,
              directives: {
                "script-src": "'self' www.google-analytics.com",
                "style-src": "'self' 'unsafe-inline'",
                "img-src": "'self' data: www.google-analytics.com"
              }
            }
          },
          {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
              siteUrl: `https://timely-cobbler-695512.netlify.app`,
              stripQueryString: true,
            },
          },
          {
            resolve: 'gatsby-plugin-preconnect',
            options: {
              domains: ['https://www.facebook.com','https://twitter.com','https://www.instagram.com','https://www.linkedin.com','https://bidgemmer.freshdesk.com'],
            },
          },
          `gatsby-plugin-remove-trailing-slashes`,
        // "gatsby-plugin-webpack-bundle-analyser-v2",
        // {
        //     resolve: 'gatsby-plugin-page-creator',
        //     options: {
        //         path: `./src/theme_pages`
        //     }
        // }
    ]
};

export default config;
