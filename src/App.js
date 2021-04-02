import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Screen from "./Screen";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor() {
    super();
    this.angle_change = 0;
  }
  componentDidMount() {
    var zt = new ZingTouch.Region(
      document.getElementsByClassName("button-container")[0]
    );
    zt.bind(
      document.getElementsByClassName("button-container")[0],
      "rotate",
      (event) => {
        let distance = event.detail.distanceFromLast;
        this.angle_change += distance;
        if (this.angle_change > 15) {
          console.log("clockwise");
          this.angle_change = 0;
        } else if (this.angle_change < -15) {
          console.log("anti-clockwise");
          this.angle_change = 0;
        }
      }
    );
    zt.bind(
      document.getElementsByClassName("center-button")[0],
      "tap",
      (event) => {
        event.stopPropagation();
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Screen />
        <Buttons check={this.checker} selectButton={this.selectButton} />
      </div>
    );
  }
}

export default App;
