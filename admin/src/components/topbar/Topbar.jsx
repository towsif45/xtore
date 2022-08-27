import React from "react";
import "./topbar.css";
import { ExitToApp } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Xtore Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <ExitToApp />
          </div>
          
        </div>
      </div>
    </div>
  );
}
