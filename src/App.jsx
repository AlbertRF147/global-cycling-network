import { ThemeProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import Search from "./components/Search";
import _videos from "./videos";
import { css } from "@emotion/css";
import screengrab from "./media/image2.png";

const theme = {
  colors: {
    red: "#c30107",
  },
};

const styles = {
  video: {
    margin: "calc(20px + 40px) 0 20px 0",
    padding: "0 10px",
  },
  thumbnail: {
    textAlign: "center",
    width: "100%",
  },
  text: {
    textAlign: "left",
    margin: "5px 0",
  },
  footer: {
    height: "40vh",
    width: "100vw",
    backgroundSize: "contain",
    background: `url(${screengrab})`,
  },
};

const MenuModal = ({ closeHandler, type, title }) => {
  return (
    <Modal closeHandler={closeHandler} title={title}>
      {type === "menu" ? <Menu /> : <Search />}
    </Modal>
  );
};

function App() {
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const [menuModalVisible, setMenuModalVisible] = useState(false);
  const [videos, setVideos] = useState([]);

  const searchModalHandler = () => {
    setSearchModalVisible(true);
    setMenuModalVisible(false);
  };

  const menuModalHandler = () => {
    setSearchModalVisible(false);
    setMenuModalVisible(true);
  };

  const closeHandler = () => {
    setMenuModalVisible(false);
    setSearchModalVisible(false);
  };

  useEffect(() => {
    // Couldn't fetch the data from localhost due to CORS issues
    // fetch("https://www.globalcyclingnetwork.com/api/devtask", {
    //   method: "GET",
    //   mode: "cors",
    //   headers: {
    //     'Accept': "application/json",
    //     "Content-Type": "application/json; charset=utf-8",
    //   },
    //   credentials: "same-origin",
    // })
    setVideos(_videos);
  }, [videos]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar
          searchModalHandler={searchModalHandler}
          menuModalHandler={menuModalHandler}
        />
        {searchModalVisible ? (
          <MenuModal
            type="search"
            title="Search Content"
            closeHandler={closeHandler}
          />
        ) : (
          ""
        )}
        {menuModalVisible ? (
          <MenuModal type="menu" title="Menu" closeHandler={closeHandler} />
        ) : (
          ""
        )}
        <div>
          {videos.length &&
            videos.map(({ description, _id, publishDate, title }, i) => {
              return (
                <div key={i} className={css({ ...styles.video })}>
                  <img
                    className={css({ ...styles.thumbnail })}
                    src={`https://img.youtube.com/vi/${_id}/mqdefault.jpg`}
                  />
                  <div className={css({ ...styles.text })}>
                    <strong>{new Date(publishDate).toDateString()}</strong>
                  </div>
                  <div className={css({ ...styles.text })}>{title}</div>
                </div>
              );
            })}
        </div>
        <footer className={css({ ...styles.footer })}></footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
