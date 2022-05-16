import {
  faWindowClose,
  faWindowMaximize,
  faWindowMinimize,
} from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./TopBar.css";

function TopBar({ setMenuActive }) {
  const [max, setMax] = useState(false);

  return (
    <div className="TopBar">
      <div onClick={() => setMenuActive((prev) => !prev)} className="menu-bt">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className="content">
        <div>
          {" "}
          <div className="logo">
            <img
              height={"24px"}
              src={require("../../Netflix-logo.png")}
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div onClick={() => window.top.blur()} className="bt">
        <FontAwesomeIcon icon={faWindowMinimize} />
      </div>
      <div
        onClick={() => {
          if (!max) {
            setMax(true);
            window.top.resizeTo(
              window.screen.availWidth,
              window.screen.availHeight
            );
          } else {
            setMax(false);
            window.top.resizeTo(
              window.screen.availWidth / 2,
              window.screen.availHeight / 2
            );
          }
        }}
        className="bt"
      >
        <FontAwesomeIcon icon={faWindowMaximize} />
      </div>
      <div onClick={() => window.top.close()} className="bt">
        <FontAwesomeIcon icon={faWindowClose} />
      </div>
    </div>
  );
}

export default TopBar;
