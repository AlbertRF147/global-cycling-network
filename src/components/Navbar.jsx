import React from "react";
import MenuIcon from "./MenuIcon";
import { css } from "@emotion/css";
import { ThemeContext, useTheme } from "@emotion/react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    height: 50,
    alignItems: "center",
    padding: "0 10px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "calc(100% - 10px)",
  },
  logo: {
    backgroundImage:
      "url(https://www.globalcyclingnetwork.com/imgs/GCNLogoTxt.svg)",
    height: 20,
    width: 80,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
};

function Navbar(props) {
  const { searchModalHandler, menuModalHandler } = props;
  const theme = useTheme();
  return (
    <nav className={css({ ...styles.navbar, background: theme.colors.red })}>
      <div className="left-side">
        <div className={css({ ...styles.logo })} />
      </div>
      <div className="right-side">
        <MenuIcon type="search" clickHandler={searchModalHandler} />
        <MenuIcon type="burger" clickHandler={menuModalHandler} />
      </div>
    </nav>
  );
}

export default Navbar;
