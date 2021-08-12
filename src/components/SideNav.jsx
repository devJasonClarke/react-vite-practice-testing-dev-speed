import React from 'react'
import Apple from "../img/apple.svg";
import Android from "../img/android.svg";
import PC from "../img/pc.svg";
import Logo from "../img/logoalt.svg";


export default function SideNav() {
  return (
    <div className="sidenav">
      <img src={Logo} alt="apple" width="70px" />
      <div className="icons-list">
        <img src={Apple} alt="apple" width="50px" />
        <img src={PC} alt="pc" width="50px" />
        <img src={Android} alt="android" width="50px" />
        <img src={Apple} alt="apple" width="50px" />
      </div>
    </div>
  );
}
