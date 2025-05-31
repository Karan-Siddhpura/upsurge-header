import React, { useState } from "react";
import "./Header.css";
import { GoChevronDown } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Mobilemenu from "../Mobilemenu/Mobilemenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menu, setMenu] = useState(false);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleToggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      {activeDropdown && (
        <div className="backdrop" onClick={handleMouseLeave} />
      )}
      <header className="header">
        <div className="header-main">
          <div className="desktop-header">
            <nav className="nav">
              <Link to="/" className="logo">
                <p>Upsurge</p>
              </Link>

              <div>
                <div className="nav-item">
                  <p>Courses</p>
                  <div className="nav-icon">
                    <GoChevronDown />
                  </div>
                </div>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter("live")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-item">
                  <p>Live Classes</p>
                  <div className="nav-icon">
                    <GoChevronDown />
                  </div>
                </div>
              </div>

              <div className="nav-item-live-text">
                <p className="nav-text-1">New Live</p>
                <p className="nav-text-2">1:1 Guidance</p>
              </div>
            </nav>

            <div className="serach-bar">
              <p className="search-placeholder">
                Search for Options, Strategies, Mutual Fund ...
              </p>
              <div className="search-icon">
                <CiSearch />
              </div>
            </div>

            <div className="profile-section">
              <Link to="/test" className="my-learinig-btn">
                <p>My Learning</p>
              </Link>
              <div className="profile">
                <p>ab</p>
              </div>
            </div>
          </div>

          <div className="mobile-header">
            <div className="left-section">
              <div className="hamburger-menu" onClick={handleToggleMenu}>
                <GiHamburgerMenu />
              </div>
              <Link to="/" className="logo">
                <p>Upsurge</p>
              </Link>
            </div>
            <div className="right-section">
              <div className="search-icon">
                <CiSearch />
              </div>
              <Link to="/test" className="my-learinig-btn">
                <p>My Learning</p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {menu && <Mobilemenu handleToggleMenu={handleToggleMenu} />}
    </>
  );
};

export default Header;
