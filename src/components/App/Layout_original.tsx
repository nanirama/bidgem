import React, {FC, ReactNode} from 'react'
import {RecoilRoot} from 'recoil'
import GoTop from './GoTop'
import SEO, {SEOProps} from './SEO'

export interface LayoutProps extends SEOProps {
    children: Array<ReactNode> | ReactNode
}

const Layout: FC<LayoutProps> = ({children, ...seoProps}) => {
    return (
        <RecoilRoot>
            <SEO {...seoProps}/>
            {children}
            <GoTop scrollStepInPx="100" delayInMs="10.50"/>
        </RecoilRoot>
    )
}

export default Layout
