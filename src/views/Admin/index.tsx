import React from "react";
import { StyledAdmin } from "./style";
import { Link, Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Admin = () => {
  return (
    <StyledAdmin>
      <div className="sideMenu">
        <ul>
          <li>
            <Link to="/admin/users">
              {" "}
              <FaUserAlt
                style={{
                  fontSize: "1.8rem",
                  margin: "0 0.4rem",
                  transform: "translateY(5px)",
                }}
              />{" "}
              Accounts
            </Link>
          </li>
        </ul>
      </div>
      <div className="otherSide">
        <Outlet />
      </div>
    </StyledAdmin>
  );
};

export default Admin;
