import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import TdaOverview from "../components/tda/TdaOverview"
import TdaTeam from "../components/tda/TdaTeam"
import TdaProcess from "../components/tda/TdaProcess"
import TdaDepartments from "../components/tda/TdaDepartments"
import TdaPastCases from "../components/tda/TdaPastCases"
import SEO from "../components/seo"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO />
      <TdaOverview />
      <TdaProcess />
      <TdaDepartments />
      <TdaPastCases />
      <TdaTeam />
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
