import React from "react";
import { css } from "@emotion/css";

const styles = {
  wrapper: {
    padding: "0 10px",
  },
  button: {
    margin: "0 2px",
    fontSize: ".8rem",
    background: "black",
    border: "1px solid white",
    color: "white",
    padding: "4px 7px",
    borderRadius: "3px",
  },
};

function Links() {
  return (
    <div className={css({ ...styles.wrapper })}>
      <button className={css({ ...styles.button })}>Events</button>
      <button className={css({ ...styles.button })}>Club</button>
      <button className={css({ ...styles.button })}>Shop</button>
      <button className={css({ ...styles.button })}>YouTube</button>
    </div>
  );
}

export default Links;
