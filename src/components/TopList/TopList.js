import React from "react";
import "./TopList.css";
function TopList(props) {
  return (
    <div className="TopList">
      <div className="bt"></div>
      <div className="list">
        <div className="elem">
          1
          <img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          2<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          3<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          4<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          5<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          6<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          7<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          8<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          9<img src={require("../../img/a.jpg")} alt="img" />
        </div>
        <div className="elem">
          10
          <img src={require("../../img/a.jpg")} alt="img" />
        </div>
      </div>
      <div className="bt"></div>
    </div>
  );
}

export default TopList;
