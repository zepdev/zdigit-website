import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Overview from "./Overview"
import Team from "./Team"
import Process from "./Process"
import Departments from "./Departments"
import PastCases from "./PastCases"

const useStyles = makeStyles(theme => ({
  root: {
    flexBasis: "100%",
  },
}))

function Content() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Overview />
      <Process />
      <Departments />
      <PastCases />
      {/* <Team /> */}
    </div>
  )
}

export default Content
