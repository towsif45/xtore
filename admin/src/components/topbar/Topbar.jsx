import React from "react";
import "./topbar.css";
import { ExitToApp } from "@material-ui/icons";
import { logout } from "../../redux/userRedux";
import { useDispatch } from "react-redux";

export default function Topbar() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.reload();
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Xtore Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <ExitToApp onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
}
