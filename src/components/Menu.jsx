import React, { useState } from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Socials from "./Socials";
import Links from "./Links";
import menuEntries from "../menuEntries";

const styles = {
  menu: {
    background: "black",
    color: "white",
    fontSize: "16px",
    fontWeight: "700",
    height: "100%",
    padding: 0,
    overflow: "scroll",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  entryWrapper: {
    margin: 0,
    padding: 0,
  },
  entry: {
    listStyleType: "none",
    textAlign: "left",
    anchor: {
      padding: "20px 10px",
      borderTop: "1px solid #d3d3d342",
      width: "100%",
      display: "block",
      boxSizing: "border-box",
      fontSize: "1.2rem",
    },
  },
  childEntry: {
    listStyleType: "none",
    textAlign: "left",
    padding: 0,
    anchor: {
      fontSize: "1rem",
      padding: "10px 25px",
      borderTop: "1px solid #d3d3d342",
      width: "100%",
      display: "block",
      boxSizing: "border-box",
      fontSize: ".8rem",
    },
  },
  childEntryWrapper: {
    padding: 0,
  },
  caret: {
    float: "right",
  },
};

const Caret = ({ collapsed }) => {
  return (
    <div className={css({ ...styles.caret })}>
      {collapsed ? (
        <FontAwesomeIcon icon={solid("caret-down")} />
      ) : (
        <FontAwesomeIcon icon={solid("caret-up")} />
      )}
    </div>
  );
};

const MenuEntry = (props) => {
  const { label, entries, opened, child } = props;
  const [collapsed, setCollapsed] = useState(!opened || false);

  const collapseHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <li
      className={css(entries ? { ...styles.entry } : { ...styles.childEntry })}
    >
      <a
        className={css(
          child ? { ...styles.childEntry.anchor } : { ...styles.entry.anchor }
        )}
        onClick={() => {
          entries && collapseHandler();
        }}
      >
        {label}
        {entries && <Caret collapsed={collapsed} />}
      </a>
      {entries && !collapsed && (
        <ul className={css({ ...styles.childEntryWrapper })}>
          {entries.map((entry, i) => (
            <MenuEntry key={i} {...entry} child />
          ))}
        </ul>
      )}
    </li>
  );
};

function Menu() {
  return (
    <div className={css({ ...styles.menu })}>
      <div className={css({ ...styles.topBar })}>
        <Links />
        <Socials />
      </div>
      <ul className={css({ ...styles.entryWrapper })}>
        {menuEntries.map((menuEntry, i) => {
          return <MenuEntry key={i} {...menuEntry} />;
        })}
      </ul>
    </div>
  );
}

export default Menu;
