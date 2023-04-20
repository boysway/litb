import React, { useEffect, useState } from "react";
import { StyledRegister } from "./style";
import { getIcons, getAssets, getColors, getRegex } from "../../util/assets";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import LinkButton from "../../components/LinkButton";
import InputText from "../../components/InputText";
import BiButton from "../../components/BiButton";
import { axiosUtil, seperateString } from "../../util/helper";
import { registerUser } from "../../services/auth";
import Loading from "../../components/Loading";
import axios from "axios";
const { ArrRight, ColorGoogle } = getIcons;
const { Logo } = getAssets;
const { secondary, white, dark_secondary } = getColors;
const { password } = getRegex;

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  firstName: yup
    .string()
    .required("First Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .required("Last Name is required")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required")
    .matches(
      password,
      "Password Must have at least one uppercase letter, one lowercase letter and a number"
    ),
});

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => {
      return !prev;
    });
  };

  // const getCountry = async()=>{
  //    const onr = await axios.get("https://restcountries.com/v2/all");
  //    console.log(onr);

  //    onr.data.map(async(data:any)=>{
  //     const cd = {
  //       countryName:data.name,
  //       countryCurrency:data.currencies[0].code,
  //       countryCode:data.alpha3Code,
  //       countryRegion:data.region,
  //       countryCall:data.callingCodes[0]

  //    }
  //       const saveCountry =  await axiosUtil("Post","http://localhost:8080/country", cd, null)
  //       console.log(saveCountry);
  //       return saveCountry
  //    })
  // }

  // getCountry();

  const handleReg = async () => {
    setLoading(true);
    let data = {
      userFirstName: formik.values.firstName,
      userLastName: formik.values.lastName,
      email: formik.values.email,
      userPassword: formik.values.password,
    };

    if (formik.dirty && formik.isValid) {
      const register = await registerUser(data);
      // console.log(register);
      if (register.data.message.title === "ok" && register.status === 200) {
        navigate("/");
      }
    }
    setLoading(true);
  };
  console.log(handleReg);

  return (
    <StyledRegister>
      <div className="reg_form">
        <div className="rf_lg">
          <img src={Logo} alt="" />
        </div>

        <div className="form_in">
          <div className="reg_wel">
            <div>Welcome</div>
            <div>Create your account and start trading</div>
          </div>

          <LinkButton type={"outlined"} to={"/"}>
            <>
              <ColorGoogle
                style={{ width: "30px", height: "30px", padding: "0 0.6rem" }}
              />
              <span>Sign up with Google</span>
            </>
          </LinkButton>

          <div className="inputs">
            <form onSubmit={formik.handleSubmit}>
              <InputText
                id="firstName"
                type="text"
                name="firstName"
                label="First Name"
                variant="standard"
                value={formik.values.firstName}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                formik={formik}
              />
              <InputText
                id="lastName"
                type="text"
                name="lastName"
                label="Last Name"
                variant="standard"
                value={formik.values.lastName}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                formik={formik}
              />
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
              <div className="sub">
                <BiButton
                  bg={secondary}
                  hover={dark_secondary}
                  color={white}
                  click={handleReg}
                >
                  Register
                </BiButton>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      {loading && <Loading />}
    </StyledRegister>
  );
};

export default Register;
