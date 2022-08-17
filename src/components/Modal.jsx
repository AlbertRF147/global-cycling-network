import React from "react";
import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

function Modal(props) {
  const { closeHandler, title } = props;
  const theme = useTheme();

  const styles = {
    title: {
      color: "white",
    },
    modal: {
      position: "fixed",
      height: "100vh",
      width: "100vw",
      top: 0,
      background: theme.colors.red,
    },
    closeBtn: {
      border: "none",
      background: "none",
      position: "absolute",
      right: 0,
      top: 0,
      padding: "5px 10px",
    },
  };

  return (
    <div className={css({ ...styles.modal })}>
      <h2 className={css({ ...styles.title })}>{title}</h2>
      <button className={css({ ...styles.closeBtn })} onClick={closeHandler}>
        <FontAwesomeIcon icon={solid("xmark")} color="white" size="2x" />
      </button>
      {props.children}
    </div>
  );
}

export default Modal;
