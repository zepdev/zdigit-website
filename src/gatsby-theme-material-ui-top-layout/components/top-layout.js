import React from "react"
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout"
import "@zlab-de/zel-react/zel.css"

export default function TopLayout({ children, theme }) {
  return <ThemeTopLayout theme={theme}>{children}</ThemeTopLayout>
}
