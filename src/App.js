import React from "react";
import "./App.css";
import Buttons from "./Buttons";
import Screen from "./Screen";
import ZingTouch from "zingtouch";
// import lodash from "lodash";
import $ from "jquery";

class App extends React.Component {
  constructor() {
    super();
    this.new_angle_change = 0;
    this.new_selected = 0;
    this.state = {
      options: ["Coverflow", "Music", "Games", "Settings"],
      angle_change: 0,
      selected: 0,
      showMenu: -1,
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
        this.new_angle_change += distance;
        if (this.new_angle_change > 60) {
          this.new_selected++;
          this.new_selected = this.new_selected % 4;
          this.setState({ selected: this.new_selected });
          this.new_angle_change = 0;
        } else if (this.new_angle_change < -60) {
          this.new_selected--;
          if (this.new_selected === -1) this.new_selected = 3;
          this.new_selected = this.new_selected % 4;
          this.setState({ selected: this.new_selected });
          this.new_angle_change = 0;
        }
      }
    );
  }

  menuButtonClick = () => {
    let mainMenuList = document.getElementsByClassName("main-menu")[0]
      .classList;
    if (mainMenuList.contains("width-50")) {
      $(".main-menu").removeClass("width-50"); //hide the menu
    } else {
      $(".main-menu").addClass("width-50"); //show the menu
    }
  };

  selectButtonClick = () => {
    this.menuButtonClick();
    this.setState({ showMenu: this.state.selected });
  };

  render() {
    return (
      <div className="App">
        <Screen
          selectedOption={this.state.selected}
          showMenu={this.state.showMenu}
        />
        <Buttons
          check={this.checker}
          selectButton={this.selectButton}
          menuButtonClick={this.menuButtonClick}
          selectButtonClick={this.selectButtonClick}
        />
      </div>
    );
  }
}

export default App;
