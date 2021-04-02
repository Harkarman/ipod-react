import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Screen from "./Screen";
import ZingTouch from "zingtouch";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: ["Coverflow", "Music", "Games", "Settings"],
      angle_change: 0,
      selected: 0,
    };
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
        this.state.angle_change += distance;
        if (this.state.angle_change > 60) {
          this.state.selected++;
          this.state.selected = this.state.selected % 4;
          this.setState({ selected: this.state.selected });
          this.state.angle_change = 0;
        } else if (this.state.angle_change < -60) {
          this.state.selected--;
          if ((this.state.selected = -1)) {
            this.state.selected = 3;
          }
          this.state.selected = this.state.selected % 4;
          this.setState({ selected: this.state.selected });
          this.state.angle_change = 0;
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
        <Screen selectedOption={this.state.selected} />
        <Buttons check={this.checker} selectButton={this.selectButton} />
      </div>
    );
  }
}

export default App;
