
import { StyledVerifyEmail } from "../VerifyEmail/style";
import { getAssets, getColors, getRegex } from "../../util/assets";
import LinkButton from "../../components/LinkButton";
import { Link } from "react-router-dom";
import InputText from "../../components/InputText";
import * as yup from "yup";
import { useFormik } from "formik";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
const { Logo } = getAssets;
const { secondary } = getColors;
const { password } = getRegex;

const validationSchema = yup.object({
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      password,
      "Password Must have at least one uppercase letter, one lowercase letter and a number"
    ),

    cf_password: yup
    .string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Change = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => {
      return !prev;
    });
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      cf_password:""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  return (
    <StyledVerifyEmail>
      <div className="verify">
        <div className="head">
          <h1>Change Password</h1>
          <img src={Logo} alt="" />
        </div>
        <div className="msg">Update Password</div>
        <div className="ver_email">
          <form onSubmit={formik.handleSubmit}>
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
              label="New Password"
              name={"password"}
              variant="standard"
              formik={formik}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <InputText
              id="cf_password"
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
              label="Confirm Password"
              name={"cf_password"}
              variant="standard"
              formik={formik}
              value={formik.values.cf_password}
              error={formik.touched.cf_password && Boolean(formik.errors.cf_password)}
              helperText={formik.touched.cf_password && formik.errors.cf_password}
            />
          </form>
        </div>
        <div className="resend">
          Didn't get verification code? <Link to="/">Resend</Link>
        </div>
        <div className="ver_bt">
          <LinkButton
            type="solid"
            to="/"
            styles={{
              backgroundColor: secondary,
              borderRadius: "0px",
              padding: "0.8rem 0",
            }}
          >
            Update Password
          </LinkButton>
        </div>
      </div>
    </StyledVerifyEmail>
  );
};

export default Change;
