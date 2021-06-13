import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Resume Tracker</span>
          <span className="heading-primary-sub">Track your application</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
