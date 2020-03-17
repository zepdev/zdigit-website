import React from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import List from "@zlab-de/zel-react/List"
import ListItem from "@zlab-de/zel-react/ListItem"
import Hidden from "@material-ui/core/Hidden"
import venn from "../../assets/tda/venn.png"
import Container from "../Container"

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      flexWrap: "nowrap",
    },
  },
  textContainer: {
    flexBasis: "100%",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("lg")]: {
      flexBasis: "49%",
      mariginBottom: 0,
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
  text: {
    marginBottom: `${theme.space.m.rem}rem`,
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
  },
  xs: {
    display: "none",
  },
  imgContainer: {
    textAlign: "center",
  },
  img: {
    width: 300,
    margin: "0 auto",
  },
}))

function TdaOverview() {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Container variant="spaceBetween" className={classes.container}>
      <Hidden mdDown>
        <img src={venn} alt="venn digram" className={classes.img} />
      </Hidden>
      <div className={classes.textContainer}>
        <p className={clsx(classes.name, "zep-typo--display-6")}>
          Team Data Analytics
        </p>
        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t("tda.header.what")}
        </p>
        <p className={clsx(classes.text, "zep-typo--normal-body1")}>
          {t("tda.overview.visionText")}
        </p>
        <List>
          <ListItem>{t("tda.overview.bullet1")}</ListItem>
          <ListItem>{t("tda.overview.bullet2")}</ListItem>
          <ListItem>{t("tda.overview.bullet3")}</ListItem>
        </List>
      </div>
      <Hidden lgUp>
        <img src={venn} alt="venn digram" className={classes.img} />
      </Hidden>
    </Container>
  )
}

export default TdaOverview
