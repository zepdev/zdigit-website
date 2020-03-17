import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Heading from "./Heading"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: 90,
      paddingBottom: 90,
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 90,
      paddingBottom: 90,
      margin: "0 auto",
      width: 1440,
    },
  },
  secondary: {
    background: "#E5F3FF",
  },
  primary: {
    background: theme.logo.digitBlue.hex,
  },
  flexStart: {
    display: "flex",
    flexWrap: "wrap",
  },
  flexEnd: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  center: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  spaceBetween: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  spaceAround: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  subtitle: {
    marginBottom: `${theme.space.xl.rem}rem`,
    textAlign: "center",
  },
}))

function Container({
  children,
  variant,
  background,
  title,
  subtitle,
  className: classNameProp,
}) {
  const classes = useStyles()
  return (
    <div
      className={clsx({
        [classes.secondary]: background === "secondary",
        [classes.primary]: background === "primary",
      })}
    >
      <div className={classes.container}>
        {title && <Heading>{title}</Heading>}
        {subtitle && (
          <p className={clsx(classes.subtitle, "zep-typo--normal-body2")}>
            {subtitle}
          </p>
        )}
        <div
          className={clsx(
            {
              [classes[variant]]: variant !== undefined,
            },
            classNameProp
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.bool,
  ]),
  background: PropTypes.oneOf(["secondary", "primary", "inverse"]),
  variant: PropTypes.oneOf([
    "flexStart",
    "flexEnd",
    "center",
    "spaceBetween",
    "spaceAround",
  ]),
}

export default Container
