
import { StyledVerifyEmail } from "./style";
import { getAssets, getColors } from "../../util/assets";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { refreshUser, verifyUser } from "../../services/auth";
import { useCookies } from "react-cookie";
import BiButton from "../../components/BiButton";
const { Logo } = getAssets;
const { secondary } = getColors;

const VerifyEmail = () => {
  const [verCode, setVerCode] = useState("");
  const [cookies] = useCookies(["token"]);
  const navigate =  useNavigate()

  const handleVerify = async () => {
    const refresh: any = await refreshUser({
      refreshTokenString: cookies.token,
    });
  

    const verify: any = await verifyUser(
      { token: verCode },
      refresh.data.newToken
    );

    console.log(verify);
    

    if(verify.data.data ===  "verfied" && verify.data.message.title === "ok"){
        navigate("/user/profile");
    }
   
  };

  return (
    <StyledVerifyEmail>
      <div className="verify">
        <div className="head">
          <h1>Verify Email</h1>
          <img src={Logo} alt="" />
        </div>
        <div className="msg">
          Please refer to the registered email and insert below verification
          code sent to you
        </div>
        <div className="ver_input_con">
          <input
            className="ver_input"
            type="text"
            name=""
            id=""
            onChange={(e) => setVerCode(e.target.value)}
            maxLength={4}
          />
        </div>

        <div className="resend">
          Didn't get verification code? <Link to="/">Resend</Link>
        </div>
        <div className="ver_bt">
          <BiButton
            bg={secondary}
            hover={getColors.dark_secondary}
            color={getColors.white}
            click={handleVerify}
          >
            Verify Email
          </BiButton>
        </div>
      </div>
    </StyledVerifyEmail>
  );
};

export default VerifyEmail;
