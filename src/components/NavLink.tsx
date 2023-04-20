import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getColors, getAssets } from "../util/assets";
import { RiMenu3Line, RiSettings2Line, RiMailLine } from "react-icons/ri";
import { ImCancelCircle } from "react-icons/im";
import { FaChartLine, FaUser, FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Badge } from "@mui/material";
const { secondary, white, primary } = getColors;
const { Logo } = getAssets;

const StyledNavBar = styled.div`
    position:fixed;
    top:0;
    z-index:99;
    width:100%;
   
  .profile {
    transform: translateY(5px);
    position: relative;
    .sub_menu {
      position: absolute;
      background-color: ${secondary};
      width: 200px;
      right: -10px;
      top: 35px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      ul {
        padding: 0px;
        margin: 0px;
        li {
          list-style-type: none;
          a {
            color: ${white};
            text-decoration: none;
            font-size: 1.2rem;
            display: block;
            padding: 0.6rem 1rem;
            &:hover {
              background-color: ${primary};
            }

            span {
              padding: 0 1rem;
            }
          }
        }
      }
    }
  }

  .navbar {
    background-color: ${secondary};

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 20;
  }

  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    max-width: 1500px;
  }

  .nav-logo {
    cursor: pointer;
    flex-grow: 1;
    display: flex;
    align-items: center;

    img {
      width: 80px;
      height: 100%;
    }
  }

  .nav-menu {
    display: flex;
    list-style: none;

    margin-right: 2rem;
  }

  .nav-links {
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;

    &:hover {
      cursor: pointer;
    }
  }
  .fa-code {
    margin-left: 1rem;
  }

  .nav-item {
    line-height: 40px;
    margin-right: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }

  .nav-item:hover:after {
    width: 100%;
    background: #ffdd40;
  }

  .nav-item .active {
    color: #ffdd40;
    border: 1px solid #ffdd40;
  }

  .nav-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: ${primary};
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }

    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 70%);
      font-size: 1.8rem;
      cursor: pointer;
      color: ${white};
    }
  }
`;

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [subNav, showSubNav] = useState(false);
  const handleClick = () => setClick(!click);

  const toggleNavigation = () => {
    showSubNav(!subNav);
  };
  return (
    <StyledNavBar>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="" />
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item" style={{marginRight:"2rem"}}>
              <Badge badgeContent={4} color="primary">
                <RiMailLine style={{fontSize:"1.6rem", color:"white"}} />
              </Badge>
            </li>
            <li
              className="nav-item profile"
              onMouseEnter={toggleNavigation}
              onMouseLeave={toggleNavigation}
            >
              <FaUser style={{ fontSize: "1.6rem", color: "white" }} />
              {subNav && (
                <div className="sub_menu">
                  <ul>
                    <li>
                      <Link to={"/"}>
                        <span>
                          <CgProfile />
                        </span>
                        Profile
                      </Link>
                    </li>

                    <li>
                      <Link to={"/"}>
                        <span>
                          <RiSettings2Line />
                        </span>
                        Settings
                      </Link>
                    </li>

                    <li>
                      <Link to={"/"}>
                        <span>
                          <FaWallet />
                        </span>
                        Wallet
                      </Link>
                    </li>

                    <li>
                      <Link to={"/"}>
                        <span>
                          <FaChartLine />
                        </span>
                        Trade
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {click ? <ImCancelCircle /> : <RiMenu3Line />}
          </div>
        </div>
      </nav>
    </StyledNavBar>
  );
};

export default NavBar;
