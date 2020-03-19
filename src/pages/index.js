import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Overview from "../components/homepage/Overview"
import "@zlab-de/zel-react/zel.css"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <Overview />
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
