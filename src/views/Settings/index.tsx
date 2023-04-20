
import { StyledSettings } from "./style";
import { Link, Outlet} from "react-router-dom";
import { BsLockFill } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import {SiMarketo} from "react-icons/si"
import { RiCoinLine } from "react-icons/ri";


const Settings = () => {
  return (
    <StyledSettings>
      <div className="sideMenu">
        <ul>
          <li>
            <Link to="/user">
              {" "}
              <FaUser
                style={{
                  fontSize: "1.8rem",
                  margin: "0 0.4rem",
                  transform: "translateY(5px)",
                }}
              />{" "}
              Profile
            </Link>
          </li>
          <li>
            <Link to="/user/account">
              <MdAccountBox
                style={{
                  fontSize: "1.8rem",
                  margin: "0 0.4rem",
                  transform: "translateY(5px)",
                }}
              />{" "}
              Account
            </Link>
          </li>
          <li>
            <Link to="/user/market">
              <SiMarketo
                style={{
                  fontSize: "1.8rem",
                  margin: "0 0.4rem",
                  transform: "translateY(5px)",
                }}
              />{" "}
              Market
            </Link>
          </li>
          <li>
            <Link to="/user/trade">
              <RiCoinLine
                style={{
                  fontSize: "1.8rem",
                  margin: "0 0.4rem",
                  transform: "translateY(5px)",
                }}
              />{" "}
              Trade
            </Link>
          </li>
        </ul>
      </div>
      <div className="otherSide">
        <Outlet/>
      </div>
    </StyledSettings>
  );
};

export default Settings;
