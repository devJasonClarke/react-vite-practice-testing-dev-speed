import React from "react";
import "../css/homepage.css";
import "../css/main.css";
import SideNav from "../components/SideNav";
import NavBar from "../components/NavBar";

import Logo from "../img/Asset_4.png";
function Home() {
  return (
    <div className='grid'>
      <SideNav />
      <div className='main_bg'>
        <NavBar />
        <footer>
            <div className='updates'>
                <h1>Updates</h1>
                <ul>
                    <li>Made Design</li>
                </ul>
            </div>
            <div className='news'>
            <h1>News</h1>
                <ul>
                    <li>Made Design</li>
                </ul>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
