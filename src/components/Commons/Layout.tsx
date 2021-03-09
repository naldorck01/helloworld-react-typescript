import React from "react"
import { Helmet } from "react-helmet"

const Layout = ({ children, title, subtitle }: { children: React.ReactChild, title?: string, subtitle?: string}): JSX.Element => {
  return (
    <>
      <Helmet>
        {title && <title>Typescript | {title}</title>}        
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout