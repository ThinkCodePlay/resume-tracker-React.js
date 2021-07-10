import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">To Do List</span>
          <span className="heading-primary-sub">Never Forget Again</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
