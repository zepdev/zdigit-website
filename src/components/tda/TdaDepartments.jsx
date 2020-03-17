import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import build1 from "../../assets/tda/analytics.svg"
import build3 from "../../assets/tda/fleetx.svg"
import build2 from "../../assets/tda/usecase.svg"
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
    width: "100%",
    marginLeft: 30,
    marginRight: 0,
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

function TdaDepartments() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <>
      <Container variant="spaceBetween" className={classes.container}>
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
            {t("tda.analytics.tagline")}
          </p>
          <p className="zep-typo--normal-body1">
            {t("tda.analytics.overview")}
          </p>
        </div>
      </Container>
      <Container variant="spaceBetween">
        <div className={classes.flex}>
          <h2 className={clsx(classes.name, "zep-typo--display-6")}>
            Use Cases
          </h2>
          <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
            {t("tda.usecase.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("tda.usecase.overview")}</p>
        </div>
        <Hidden smDown>
          <div className={classes.imgContainer}>
            <img src={build2} alt="builders 2" className={classes.imgReverse} />
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
            {t("tda.fleetx.tagline")}
          </p>
          <p className="zep-typo--normal-body1">{t("tda.fleetx.overview")}</p>
        </div>
      </Container>
    </>
  )
}

export default TdaDepartments
