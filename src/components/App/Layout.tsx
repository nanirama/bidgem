import React, {FC, ReactNode} from 'react'
import GoTop from './GoTop'
import SEO, {SEOProps} from './SEO'
import Navbar from '../Bidgemmer/Common/Navbar'
import Footer from '../Bidgemmer/Common/Footer'

export interface LayoutProps extends SEOProps {
    children: Array<ReactNode> | ReactNode
}

const Layout: FC<LayoutProps> = ({children, ...seoProps}) => {
    return (
        <>
            <SEO {...seoProps}/>
            <Navbar/>
            {children}
            <Footer/>
            <GoTop scrollStepInPx="100" delayInMs="10.50"/>
        </>
    )
}

export default Layout
