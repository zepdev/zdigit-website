import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import ZAccount from "../components/products/ZAccount"
import Ecommerce from "../components/products/Ecommerce"
import Website from "../components/products/Website"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <ZAccount />
      <Ecommerce />
      <Website />
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
