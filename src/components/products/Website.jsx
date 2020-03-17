import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import image from "../../assets/products/website.svg"
import Container from "../Container"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles(theme => ({
  container: {
    flexWrap: "wrap",
    [theme.breakpoints.up("sm")]: {
      flexWrap: "nowrap",
    },
  },
  reverse: {
    flexDirection: "column",
  },
  background: {
    background: "#E5F3FF",
  },
  imgContainer: {
    flexBasis: "50%",
    height: 400,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "40%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "55%",
    },
  },
  imgReverse: {
    height: "100%",
    width: "auto",
    margin: "0 auto",
  },
  img: {
    width: "100%",
    marginLeft: 0,
    marginRight: 30,
  },
  flex: {
    flexBasis: "100%",
    alignSelf: "center",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      marginBottom: 0,
    },
  },
  name: {
    color: theme.logo.digitBlue.hex,
    marginBottom: `${theme.space.s.rem}rem`,
    fontSize: 18,
  },
  tagline: {
    marginBottom: `${theme.space.xl.rem}rem`,
  },
  hidden: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
}))

function Website() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Container variant="spaceBetween" className={classes.container}>
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={image} alt="app development" className={classes.img} />
          </div>
        </Hidden>
        <div className={classes.flex}>
          <p className={clsx(classes.name, "zep-typo--display-6")}>
            {t("website.who")}
          </p>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("website.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("website.content")}</p>
        </div>
      </Container>
    </>
  )
}

export default Website
