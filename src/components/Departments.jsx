import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import build1 from "../assets/build4.png"
import build2 from "../assets/build5.png"
import build3 from "../assets/build6.png"
import Container from "./Container"
import Hidden from "@material-ui/core/Hidden"

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up("s")]: {
      paddingLeft: 60,
      paddingRight: 60,
    },
    [theme.breakpoints.up("m")]: {
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up("l")]: {
      paddingTop: 45,
      paddingBottom: 90,
      paddingLeft: 90,
      paddingRight: 90,
    },
    [theme.breakpoints.up("xl")]: {
      paddingTop: 30,
      paddingBottom: 30,
      paddingLeft: 90,
      paddingRight: 90,
    },
  },
  reverse: {
    flexDirection: "column",
  },
  background: {
    background: "#E5F3FF",
  },
  imgContainer: {
    flexBasis: "55%",
    height: 500,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("m")]: {
      flexBasis: "40%",
      marginBottom: 0,
    },
    [theme.breakpoints.up("m")]: {
      flexBasis: "55%",
    },
  },
  img: {
    height: "50%",
  },
  flex: {
    flexBasis: "100%",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("m")]: {
      flexBasis: "55%",
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
    [theme.breakpoints.up("m")]: {
      display: "block",
    },
  },
}))

function Overview() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Container variant="spaceBetween">
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build1} alt="builders 1" className={classes.img} />
          </div>
        </Hidden>
        <div className={classes.flex}>
          <p className={clsx(classes.name, "zep-typo--display-6")}>
            Analytics+
          </p>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("analytics.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("analytics.overview")}</p>
        </div>
      </Container>
      <Container variant="spaceBetween">
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>
            Use Cases
          </h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("usecase.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("usecase.overview")}</p>
        </div>
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build2} alt="builders 2" className={classes.img} />
          </div>
        </Hidden>
      </Container>
      <Container variant="spaceBetween">
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build3} alt="builders 3" className={classes.img} />
          </div>
        </Hidden>
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>FleetX</h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("fleetx.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("fleetx.overview")}</p>
        </div>
      </Container>
    </>
  )
}

export default Overview

{
  //FOR BIG PICS IN FUTURE
  /* <div className={clsx(classes.container, classes.background)}>
<div className={classes.imgContainer}>
  <img src={build1} alt="builders 1" className={classes.img} />
</div>
<div className={classes.flex}>
  <p className={clsx(classes.name, "zep-typo--display-6")}>
    Analytics+
  </p>
  <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
    {t("analytics.tagline")}
  </p>
  <p className="zep-typo--normal-body1">{t("analytics.overview")}</p>
</div>
</div>
<div
className={clsx(classes.container, classes.background, classes.reverse)}
>
<div className={classes.flex}>
  <h2 className={clsx(classes.name, "zep-typo--display-6")}>
    Use Cases
  </h2>
  <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
    {t("usecase.tagline")}
  </p>
  <p className="zep-typo--normal-body1">{t("usecase.overview")}</p>
</div>
<div className={classes.imgContainer}>
  <img src={build2} alt="builders 2" className={classes.img} />
</div>
</div>
<div className={clsx(classes.container, classes.background)}>
<div className={classes.imgContainer}>
  <img src={build3} alt="builders 3" className={classes.img} />
</div>
<div className={classes.flex}>
  <h2 className={clsx(classes.name, "zep-typo--display-6")}>FleetX</h2>
  <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
    {t("fleetx.tagline")}
  </p>
  <p className="zep-typo--normal-body1">{t("fleetx.overview")}</p>
</div>
</div> */
}
