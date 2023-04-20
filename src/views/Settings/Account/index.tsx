import { Switch } from "@mui/material";
import BiButton from "../../../components/BiButton";
import { getColors } from "../../../util/assets";
import { StyledAcc } from "./style";
import { FiEdit } from "react-icons/fi";

const label = { inputProps: { "aria-label": "Switch demo" } };
const Account = () => {
  return (
    <StyledAcc>
      <div className="pass_change">
        <p className="title">Block Account</p>
        <div className="change">
          <p className="sub_t">Disabled</p>
          <p className="sub_p">
            <Switch
              {...label}
              defaultChecked
              style={{ color: getColors.dark_primary }}
            />
          </p>
        </div>
      </div>
      <div className="pass_change">
        <p className="title">Delete Account</p>
        <div className="change">
          <p className="sub_t">Account will be deleted permanently</p>
          <div className="del_btn">
            <BiButton
              bg={getColors.primary}
              color={getColors.white}
              hover={getColors.dark_primary}
            >
              Delete
            </BiButton>
          </div>
        </div>
      </div>
      <div className="pass_change">
        <p className="title">Change Password</p>
        <div className="change">
          <p className="sub_t">Password</p>
          <p className="sub_p">***********</p>
          <div className="act">
            <FiEdit />
          </div>
        </div>
      </div>
    </StyledAcc>
  );
};

export default Account;
