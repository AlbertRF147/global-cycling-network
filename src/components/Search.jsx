import React, { useState } from "react";
import { css } from "@emotion/css";
import screengrab from "../media/image1.png";

const styles = {
  input: {
    border: "1px solid lightgray",
    borderRadius: "50000px",
    padding: "5px 10px",
    width: "80%",
  },
  recommendations: {
    backgroundSize: "cover",
    width: "100%",
    marginTop: "20px",
  },
};

const Recommendations = () => {
  return (
    <div>
      <img src={screengrab} className={css({ ...styles.recommendations })} />
    </div>
  );
};

function Search() {
  const [typed, setTyped] = useState("");
  const typeHandler = (e) => {
    const typedValue = e.target.value;
    setTyped(typedValue);
  };
  return (
    <>
      <input
        className={css({ ...styles.input })}
        placeholder="Type here..."
        onChange={typeHandler}
      />
      {typed && <Recommendations />}
    </>
  );
}

export default Search;
