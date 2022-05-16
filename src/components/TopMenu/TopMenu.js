import {
  faCircleQuestion,
  faEdit,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBell,
  faCaretDown,
  faCaretUp,
  faInfo,
  faSearch,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import "./TopMenu.css";

function TopMenu({ menuActive }) {
  return (
    <div
      style={{ top: `${menuActive ? "2rem" : "-5rem"}` }}
      className="TopMenu"
    >
      <div className="menu">
        <div className="logo">
          <img src={require("../../Netflix-logo.png")} alt="" />
        </div>
        <ul>
          <li>Strona główna</li>
          <li>Seriale i programy</li>
          <li>Filmy</li>
          <li>Moja lista</li>
        </ul>
      </div>
      <div className="btns">
        <div className="bt">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="bt">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="bt user">
          <div className="user">
            {" "}
            <img src={require("../../img/prof.png")} alt="" />
            <FontAwesomeIcon icon={faCaretDown} className="i" />
          </div>

          <div className="box">
            <ul>
              <li>
                <img src={require("../../img/prof.png")} alt="" />
                Kuba
              </li>
              <li>
                <FontAwesomeIcon icon={faEdit} className="a" />
                Zarządzaj profilami
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} className="a" />
                Konto
              </li>
              <li>
                <FontAwesomeIcon icon={faCircleQuestion} className="a" />
                Centrum pomocy
              </li>
              <li>
                <FontAwesomeIcon icon={faSignOut} className="a" />
                Wyloguj się
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMenu;
