import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import TopMenu from "./components/TopMenu/TopMenu";
import TopTriller from "./components/TopTriller/TopTriller";
import React, { useState } from "react";
import TopList from "./components/TopList/TopList";
import VideoList from "./components/VideoList/VideoList";
function App() {
  const [menuActive, setMenuActive] = useState(true);
  return (
    <div className="App">
      <TopBar setMenuActive={setMenuActive} />
      <TopMenu menuActive={menuActive} />
      <TopTriller />
      <TopList videoOrSeries={"Movie"} title={"Top 10 filmów"} />
      <VideoList category={"Comedy"} title={"Najlepsze komedie"} />
      <TopList videoOrSeries={"Series"} title={"Top 10 seriali"} />
      <VideoList category={"Drama"} title={"Najlepsze dramaty"} />
      <VideoList category={"Action"} title={"Filmy akcji"} />
      <VideoList category={"Horror"} title={"Filmy grozy"} />
      <VideoList category={"Romance"} title={"Najlepsze komedie romantyczne"} />
      <div className="space"></div>
    </div>
  );
}

export default App;
