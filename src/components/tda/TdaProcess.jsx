import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "react-i18next"
import clsx from "clsx"
import Container from "../Container"
import Contact from "./Contact"

const useStyles = makeStyles(theme => ({
  flex: {
    flexBasis: "100%",
    marginBottom: `${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("md")]: {
      flexBasis: "45%",
      marginBottom: 0,
    },
  },
  name: {
    color: theme.blue.primary,
    marginBottom: `${theme.space.s.rem}rem`,
    fontSize: 18,
  },
  tagline: {
    marginBottom: `${theme.space.xl.rem}rem`,
  },
  stepsContainer: {
    flexBasis: "100%",
    display: "flex",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexBasis: "49%",
    },
  },
  stepsItem: {
    flexBasis: "49%",
    marginBottom: `${theme.space.xl.rem * 2}rem`,
  },
  stepsText: {
    paddingRight: 10,
    paddingLeft: 45,
  },
  numberContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: `${theme.space.s.rem}rem`,
  },
  number: {
    background: theme.blue.primary,
    color: theme.color.global.white,
    width: 30,
    height: 30,
    padding: 7,
    textAlign: "center",
    borderRadius: "50%",
    marginRight: `${theme.space.m.rem}rem`,
  },
}))

function TdaProcess() {
  const classes = useStyles()
  const { t } = useTranslation()
  const steps = [
    t("tda.process.setup"),
    t("tda.process.prototype"),
    t("tda.process.pilot"),
    t("tda.process.support"),
  ]

  return (
    <Container
      variant="spaceBetween"
      title={t("tda.header.how")}
      background="secondary"
    >
      <div className={classes.flex}>
        <p className={clsx(classes.name, "zep-typo--display-6")}>
          {t("tda.process.name")}
        </p>

        <p className={clsx(classes.tagline, "zep-typo--bold-h2")}>
          {t("tda.process.tagline")}
        </p>
        <p className={clsx(classes.text, "zep-typo--normal-body1")}>
          {t("tda.process.text")}
        </p>
      </div>
      <div className={classes.stepsContainer}>
        {steps.map((elem, idx) => (
          <div className={classes.stepsItem} key={`step${idx}`}>
            <div className={classes.numberContainer}>
              <p className={classes.number}>{idx + 1}</p>
              <p className={(clsx(classes.title), "zep-typo--display-6")}>
                {elem}
              </p>
            </div>
            <p className={clsx(classes.stepsText, "zep-typo--normal-caption")}>
              {t(`tda.process.step${idx + 1}`)}
            </p>
          </div>
        ))}
      </div>
      <Contact />
    </Container>
  )
}

export default TdaProcess
