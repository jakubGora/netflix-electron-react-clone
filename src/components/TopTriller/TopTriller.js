import React, { useEffect, useState } from "react";
import "./TopTrilller.css";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faInfo,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
function TopTriller(props) {
  const [currentFilm, setCurrentFilm] = useState();

  useEffect(() => {
    fetch(`http://localhost:8080/netflix/Search/${"Witcher"}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCurrentFilm(data[0]);
      });
  }, []);

  return (
    <div className="TopTriller">
      {" "}
      <ReactPlayer
        loop={true}
        width={"100%"}
        height={"66vw"}
        className="react-player"
        config={{
          youtube: {
            playerVars: {
              showinfo: 0,
              mute: 1,
              autoplay: 1,
              controls: 0,
              loop: 1,
              modestbranding: 1,
              disablekb: 0,
            },
          },
        }}
        url="https://www.youtube.com/watch?v=0wCyhF_wARc&t=7s"
      />
      <div className="about">
        <div className="logo">
          <img
            src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABdGwqmU-lBtQYyQ3CA-E4vLyvsiPVSsS46k7zYrJFD44b5fJ3tIbh1YYZjMogrBZZMOa7tVpf_0QE3VAEnQHaHOIKqEtug4myzUft6XuIRfk2l-JF-doSVo9TW0DXJiUOTEnuE-wDY_kQxvsRTqKysccQvgquH6ltXxBo3P6waetuZhjXSu0sg.png?r=095"
            alt="logo"
          />
        </div>
        <h1>
          <img src={require("../../img/top10.png")} alt="top" height={"24px"} />{" "}
          Nr 1 w Polsce dzisiaj
        </h1>
        <p>{currentFilm?.summary}</p>
        <div className="btns">
          <button
            onClick={() => window.open(currentFilm?.netflixLink, "_blank")}
          >
            <FontAwesomeIcon icon={faPlay} /> Otwórz
          </button>
          <button>
            {" "}
            <FontAwesomeIcon icon={faCircleInfo} /> Więcej informacji
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopTriller;
