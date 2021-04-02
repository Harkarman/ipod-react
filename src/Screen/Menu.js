import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <div className="app-logo">
          <h3>iPod React</h3>
        </div>
        <div>
          <p>Coverflow</p>
        </div>
        <div>
          <p>Music</p>
        </div>
        <div>
          <p>Games</p>
        </div>
        <div>
          <p>Settings</p>
        </div>
      </div>
    );
  }
}

export default Menu;
