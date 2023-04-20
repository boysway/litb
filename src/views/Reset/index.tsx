

import { StyledVerifyEmail } from "../VerifyEmail/style";
import { getAssets, getColors } from "../../util/assets";

import { Link } from "react-router-dom";
import InputText from "../../components/InputText";
import * as yup from "yup";
import { useFormik } from "formik";
import BiButton from "../../components/BiButton";
import { resetUserLink } from "../../services/auth";
import Loading from "../../components/Loading";
import { useState } from "react";

const { Logo } = getAssets;
const { secondary } = getColors;


const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

const ResetPass = () => {
  const [loading, setLoading] = useState(false)
  
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const handleReset = async () => {
    setLoading(true)
    await resetUserLink({email:formik.values.email});
    setLoading(false)
    
  };
  return (
    <StyledVerifyEmail>
      <div className="verify">
        <div className="head">
          <h1>Reset Password</h1>
          <img src={Logo} alt="" />
        </div>
        <div className="msg">
          Enter your registered email address to receive password reset token
        </div>
        <div className="ver_email">
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
          </form>
        </div>
        <div className="resend">
          Didn't get verification code? <Link to="/">Resend</Link>
        </div>
        <div className="ver_bt">
          <BiButton
            bg={secondary}
            hover={getColors.dark_secondary}
            color={getColors.white}
            click={handleReset}
          >
            
            Send Link
          </BiButton>
        </div>
      </div>
     {loading && <Loading/>}
    </StyledVerifyEmail>
  );
};

export default ResetPass;
