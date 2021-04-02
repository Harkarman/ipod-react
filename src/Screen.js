import React from "react";
import Menu from "./Screen/Menu";
import Coverflow from "./Screen/Coverflow";
import Music from "./Screen/Music";
import Games from "./Screen/Games";
import Settings from "./Screen/Settings";

class Screen extends React.Component {
  render() {
    return (
      <div className="screen-container">
        <Menu selectedOption={this.props.selectedOption} />
      </div>
    );
  }
}

export default Screen;
