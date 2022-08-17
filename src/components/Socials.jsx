import React, { useState } from "react";
import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  socials: {
    height: "20px",
    margin: "10px 0",
    textAlign: "right",
    icon: {
      padding: "0 5px",
    },
  },
};
const Socials = () => {
  return (
    <div className={css({ ...styles.socials })}>
      <FontAwesomeIcon
        icon={faFacebookF}
        size="lg"
        color="white"
        className={css({ ...styles.socials.icon })}
      />
      <FontAwesomeIcon
        icon={faTwitter}
        size="lg"
        className={css({ ...styles.socials.icon })}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        size="lg"
        className={css({ ...styles.socials.icon })}
      />
      <FontAwesomeIcon
        icon={faGooglePlus}
        size="lg"
        className={css({ ...styles.socials.icon })}
      />
    </div>
  );
};
export default Socials;
