import React, { useEffect, useState } from "react";
import "./VideoList.css";
import ReactPlayer from "react-player";
function VideoList(props) {
  const [currentVideo, setCurrentVideo] = useState();
  const [topList, setTopList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/netflix/cat/${props.category}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setTopList(data);
      });
  }, []);

  const videoMouseEnterHandler = (e) => {
    setCurrentVideo(e);
  };
  const videoMouseLeaveHandler = (e) => {
    setCurrentVideo(null);
  };

  return (
    <div className="VideoList">
      <h1>{props.title}</h1>
      <div className="bt"></div>
      <div className="list">
        {topList
          ? topList.map((e, i) => (
              <div
                onMouseEnter={() => videoMouseEnterHandler(e)}
                onMouseLeave={() => videoMouseLeaveHandler(e)}
                className="elem"
              >
                <img src={e.poster} alt="img" />
              </div>
            ))
          : ""}
        <div className="trailer-mini">
          {" "}
          <ReactPlayer
            loop={true}
            className="react-player"
            width={"100%"}
            height={"100%"}
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
            url={currentVideo?.tmdbTrailer}
          />
          {/* <img src={currentVideo?.image} alt="" /> */}
          <div className="info">
            <h1>{currentVideo?.title}</h1>
            <h2>{currentVideo?.genre}</h2>
            {currentVideo?.tags.split(",")[0]}
          </div>
        </div>
      </div>
      <div className="bt"></div>
    </div>
  );
}

export default VideoList;
