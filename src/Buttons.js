import React from "react";

const Buttons = (props) => {
  return (
    <div className="button-container">
      <div className="center-button common-buttons">
        <button className="select-button"></button>
      </div>
      <button className="menu-button common-buttons">
        <i class="fas fa-bars"></i>
      </button>
      <button className="back-button common-buttons">
        <i class="fas fa-fast-backward"></i>
      </button>
      <button className="forward-button common-buttons">
        <i class="fas fa-fast-backward"></i>
      </button>
      <button className="play-pause-button common-buttons">
        <i class="fas fa-play fa-xs"></i>&nbsp;
        <i class="fas fa-pause fa-xs"></i>
      </button>
    </div>
  );
};

export default Buttons;
