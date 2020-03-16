import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Overview from "../components/Overview"
import Team from "../components/Team"
import Process from "../components/Process"
import Departments from "../components/Departments"
import PastCases from "../components/PastCases"

const Homepage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Overview />
      <Process />
      <Departments />
      <PastCases />
      <Team />
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
