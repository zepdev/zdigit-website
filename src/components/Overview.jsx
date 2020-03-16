import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import List from "@zlab-de/zel-react/List"
import ListItem from "@zlab-de/zel-react/ListItem"
import clsx from "clsx"
import Container from "./Container"
import guidelines from "@zlab-de/zel-react/guidelines.json"

const colors = [
  guidelines.logo.digitBlue.hex,
  guidelines.logo.zLabCyan.hex,
  guidelines.color.support.info.hex,
  guidelines.color.corporate.gray.hex,
  guidelines.color.support.infoLighter.hex,
]

const useStyles = makeStyles(theme => ({
  container: {
    alignItems: "center",
  },
  textContainer: {
    flexBasis: "100%",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("l")]: {
      flexBasis: "49%",
      mariginBottom: 0,
    },
  },
  imgContainerXS: {
    flexBasis: "100%",
    [theme.breakpoints.up("l")]: {
      display: "none",
    },
  },
  imgContainerL: {
    display: "none",
    [theme.breakpoints.up("l")]: {
      flexBasis: "49%",
      display: "block",
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
    width: "60%",
  },
}))

function Overview() {
  const classes = useStyles()
  const { t } = useTranslation()

  const labels = [
    "Advanced Analytics",
    "Data Infrastructure",
    "Road Mapping",
    "Kickstarting",
    "Brainstorming",
  ]

  const optionsXS = {
    chart: {
      id: "apexchart-pie",
    },
    labels: labels,
    dataLabels: {
      enabled: true,
      fontColor: "#000",
      formatter: function(val, opts) {
        return labels[opts.seriesIndex]
      },
      dropShadow: {
        enabled: false,
      },
      style: {
        colors: ["#000"],
      },
    },
    tooltip: {
      enabled: false,
    },
    colors: colors,
    legend: {
      show: false,
      position: "right",
      fontFamily: "Roboto",
      offsetY: 75,
      fontSize: 16,
      offsetX: 15,
      markers: {
        radius: 2,
      },
      itemMargin: {
        vertical: 5,
      },
    },
  }

  const optionsL = {
    chart: {
      id: "apexchart-pie",
    },
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    colors: colors,
    legend: {
      show: true,
      position: "right",
      fontFamily: "Roboto",
      offsetY: 75,
      fontSize: 16,
      markers: {
        radius: 2,
      },
      itemMargin: {
        vertical: 5,
      },
    },
  }

  return (
    <Container variant="spaceBetween" className={classes.container}>
      <div className={classes.imgContainer}>test</div>
      <div className={classes.textContainer}>
        <p className={clsx(classes.name, "zep-typo--display-6")}>
          Team Data Analytics
        </p>
        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t("header.what")}
        </p>
        <p className={clsx(classes.text, "zep-typo--normal-body1")}>
          {t("overview.visionText")}
        </p>
        <List>
          <ListItem>{t("overview.bullet1")}</ListItem>
          <ListItem>{t("overview.bullet2")}</ListItem>
          <ListItem>{t("overview.bullet3")}</ListItem>
        </List>
      </div>
      <div className={classes.imgContainerXS}>test</div>
    </Container>
  )
}

export default Overview
