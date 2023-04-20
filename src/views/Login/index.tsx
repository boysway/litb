import React, { useEffect, useState } from "react";
import { StyledLogin } from "./style";
import { getIcons, getAssets, getColors, getRegex } from "../../util/assets";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import LinkButton from "../../components/LinkButton";
import InputText from "../../components/InputText";
import BiButton from "../../components/BiButton";
import { useDispatch, useSelector } from "react-redux";

import Notify from "../../components/Notify";
import { useCookies } from "react-cookie";
import { loginUser } from "../../services/auth";
import Loading from "../../components/Loading";

const { ArrRight, ColorGoogle } = getIcons;
const { Logo } = getAssets;
const { secondary, white, dark_secondary } = getColors;
const { password } = getRegex;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      password,
      "Password Must have at least one uppercase letter, one lowercase letter and a number"
    ),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => {
      return !prev;
    });
  };

  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true)
    if (formik.dirty && formik.isValid) {
      
      const login = await loginUser(
        {
          userName: formik.values.email,
          userPassword: formik.values.password,
        },
        null
      );
      
      await setCookie("token", login.data.data.refreshToken.token, {
        path: "/",
      });

      if (login.data.message.title === "ok") {
        navigate("/user/profile");
      }
    }
    setLoading(false)
  };

  useEffect(() => {
    setLoading(true)
    if (cookies.token) {
      navigate("/user/profile");
    }
    setLoading(false)
  }, [cookies]);

  return (
    <StyledLogin>
      <div className="reg_img">
        <div className="reg_text">
          <div className="txt_one">
            Select your preferred offer and trade directly with a counterparty.
            Protectection for all participants in the transaction, providing a
            layer of protection for everyone involved.
          </div>
          <div className="reg_mv_btn">
            <Link to="/" className="mv_btn">
              <ArrRight style={{ color: "white" }} />
            </Link>
          </div>
        </div>
      </div>

      <div className="reg_form">
        <div className="rf_lg">
          <img src={Logo} alt="" />
        </div>

        <div className="form_in">
          <div className="reg_wel">
            <div>Welcome back</div>
            <div>welcome back! please enter your details</div>
          </div>

          <LinkButton type={"outlined"} to={"/"}>
            <>
              <ColorGoogle
                style={{ width: "30px", height: "30px", padding: "0 0.6rem" }}
              />
              <span>Log in with Google</span>
            </>
          </LinkButton>

          <div className="or">
            <div></div>
            <div>or</div>
            <div></div>
          </div>

          <div className="inputs">
            <form onSubmit={formik.handleSubmit}>
              <InputText
                id="email"
                type="text"
                name="email"
                label="Email"
                variant="standard"
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                formik={formik}
              />

              <InputText
                id="password"
                type={showPassword ? "text" : "password"}
                inputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                label="Password"
                name={"password"}
                variant="standard"
                formik={formik}
                value={formik.values.password}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />

              <div className="fgt">
                <Link to="/">Forgot password</Link>
              </div>
              <div className="sub">
                <BiButton
                  bg={secondary}
                  hover={dark_secondary}
                  color={white}
                  click={handleLogin}
                >
                  Login
                </BiButton>
              </div>
            </form>
          </div>

          {/* {authentication.errorMessage && (
            <Notify type="error">{authentication.errorMessage}</Notify>
          )} */}
        </div>
      </div>
      {loading && <Loading/>}
    </StyledLogin>
  );
};

export default Login;
