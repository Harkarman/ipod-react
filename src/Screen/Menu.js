import React from "react";

class Menu extends React.Component {
  render() {
    console.log(this.props.selectedOption);
    const { selectedOption } = this.props;
    return (
      <div className="main-menu">
        <div className="app-logo">
          <h3>iPod React</h3>
        </div>
        <div className={selectedOption === 0 ? "selected" : ""}>
          <p>Coverflow</p>
        </div>
        <div className={selectedOption === 1 ? "selected" : ""}>
          <p>Music</p>
        </div>
        <div className={selectedOption === 2 ? "selected" : ""}>
          <p>Games</p>
        </div>
        <div className={selectedOption === 3 ? "selected" : ""}>
          <p>Settings</p>
        </div>
      </div>
    );
  }
}

export default Menu;
