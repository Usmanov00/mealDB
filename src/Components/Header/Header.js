import React from 'react';
import logo from '../../assets/images/logo-small.png'
import facebook from '../../assets/images/facebook_icon.png'
import twitter from '../../assets/images/twitter_icon.png'
import {Link} from "react-router-dom";


const Header = () => {

  return (
    <div className="header-container">
      <div className="container ">
        <div className="navbar-header">
          <div className="logo-img">
            <Link to={'/'}>
            <img src={logo} alt=""/>
            </Link>
          </div>
          <div className="navbar-box">
            <ul className="navbar">
              <li>
                <Link to ="https://www.themealdb.com/" className="active">Home</Link>
              </li>
              <li>
                <Link to ="https://www.themealdb.com//api.php" className="">API</Link>
              </li>
              <li className="navbar-social">
                <Link to="https://forum.kodi.tv/showthread.php?tid=282387" className="">Forum</Link>
                <Link to="https://www.facebook.com/TheDataDB/" className="">
                  <img src={facebook} alt=""/>
                </Link>
                <Link to="https://twitter.com/TheAudioDB">
                  <img src={twitter} alt=""/>
                </Link>
              </li>
              <li>
                <div className="search">
                  <form action="">
                    <input type="text" name="s" className="search-form" autoComplete="off" placeholder=" Search"/>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;