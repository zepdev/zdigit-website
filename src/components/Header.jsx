import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Link from "./Link"
import ZeppelinIcon from "./icons/ZeppelinIcon"
import Drawer from "@material-ui/core/Drawer"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@zlab-de/zel-react/IconButton"
import ZepiconsMenu from "@zlab-de/zel-react-icons/ZepiconsMenu"

const useStyles = makeStyles(theme => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    zIndex: 200,
    height: 80,
    padding: `${theme.space.m.rem}rem ${theme.space.xl.rem}rem`,
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.space.m.rem}rem 30px`,
    },
    [theme.breakpoints.up("md")]: {
      padding: `${theme.space.m.rem}rem 30px`,
    },
    [theme.breakpoints.up("lg")]: {
      padding: `${theme.space.m.rem}rem 30px`,
    },
    [theme.breakpoints.up("xl")]: {
      margin: "0 auto",
      width: 1920,
    },
  },
  center: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },
  button: {
    height: 48,
    width: 48,
    padding: 0,
  },
  buttonMobile: {
    textAlign: "left",
    margin: `${theme.space.m.rem}rem`,
    padding: 0,
    border: 0,
  },
  link: {
    color: theme.color.global.black,
    margin: `${theme.space.m.rem}rem`,
    "&:hover": {
      color: theme.blue.primary,
    },
  },
  logo: {
    color: theme.color.global.black,
    width: 150,
    height: 48,
    [theme.breakpoints.up("s")]: {
      width: 200,
    },
  },
  mobileMenu: {
    display: "flex",
    flexDirection: "column",
    padding: `${theme.space.m.rem}rem`,
  },
}))

function Links() {
  const classes = useStyles()
  return (
    <>
      <Link to="/tda" className={clsx(classes.link, "zep-typo--display-5")}>
        Data Analytics
      </Link>
      <Link
        to="/products"
        className={clsx(classes.link, "zep-typo--display-5")}
      >
        Products
      </Link>
      <Link
        to="/communications"
        className={clsx(classes.link, "zep-typo--display-5")}
      >
        Communications
      </Link>
    </>
  )
}

function Header({ handleSetLang, lang }) {
  const classes = useStyles()
  const [isDrawerOpen, setDrawer] = useState(false)
  return (
    <header className={classes.header}>
      <Link to="/">
        <ZeppelinIcon className={classes.logo} />
      </Link>
      <Hidden smDown>
        <div className={classes.center}>
          <Links />
          <button
            onClick={handleSetLang}
            variant="primary"
            className={clsx(classes.button, "zep-button", "zep-button-primary")}
          >
            {lang}
          </button>
        </div>
      </Hidden>
      <Hidden mdUp>
        <IconButton
          onClick={() => setDrawer(true)}
          className={clsx(
            classes.menuButton,
            "zep-button",
            "zep-button-primary"
          )}
          color="inherit"
          aria-label="Menu"
        >
          <ZepiconsMenu className={classes.menuIcon} />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            className={classes.mobileMenu}
            onClick={() => setDrawer(false)}
            onKeyDown={() => setDrawer(false)}
          >
            <Links />
            <button
              onClick={handleSetLang}
              className={clsx(classes.buttonMobile, "zep-typo--display-5")}
            >
              {lang}
            </button>
          </div>
        </Drawer>
      </Hidden>
    </header>
  )
}

export default Header
