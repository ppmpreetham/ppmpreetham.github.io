import React from "react";

const NavBar = () => {
  return (
    <nav className="flex flex-row gap-4 p-8 justify-between">
      <div className="flex flex-row gap-4">
        <div>ABOUT</div>
        <div>WORK</div>
      </div>
      <div>PREETHAM PEMMASANI</div>
      <div className="flex flex-row gap-4">
        <div>EXPERIMENTS</div>
        <div>CONTACT</div>
      </div>
    </nav>
  );
};

export default NavBar;
