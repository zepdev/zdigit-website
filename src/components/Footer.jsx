import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    flexShrink: 0,
    color: theme.color.global.white.hex,
    background: theme.logo.digitBlue.hex,
    padding: `${theme.space.s.rem}rem`,
  },
}))

function Footer() {
  const classes = useStyles()
  return (
    <footer className={clsx(classes.footer, "zep-typo--normal-body1")}>
      <p>&copy; Zeppelin</p>
    </footer>
  )
}

export default Footer
