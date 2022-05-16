import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import TopMenu from "./components/TopMenu/TopMenu";
import TopTriller from "./components/TopTriller/TopTriller";
import React, { useState } from "react";
import TopList from "./components/TopList/TopList";
function App() {
  const [menuActive, setMenuActive] = useState(true);
  return (
    <div className="App">
      <TopBar setMenuActive={setMenuActive} />
      <TopMenu menuActive={menuActive} />
      <TopTriller />
      <TopList />
    </div>
  );
}

export default App;
