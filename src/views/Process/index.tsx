import React, { useEffect, useState } from "react";
import { StyledProcess } from "./style";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import InputText from "../../components/InputText";
import { getRegex, getColors, getAssets } from "../../util/assets";
import { useFormik } from "formik";
import * as yup from "yup";
import SelectOption from "../../components/SelectOption";
import BiButton from "../../components/BiButton";
import { updateUser} from "../../services/user";
import { useCookies } from "react-cookie";
import { authUser, axiosUtil } from "../../util/helper";
import { refreshUser } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const { secondary, dark_secondary, white } = getColors;
const {Logo} = getAssets

const steps = ["User Details", "Wallet", "Policy"];

const validationSchema = yup.object({
  mobile: yup
    .string()
    .required("Mobile Number is required")
    .matches(getRegex.phone, "Phone number is not valid"),
  country: yup.string().required("Country is required"),
  state: yup.string().required("State is required"),
  city: yup.string().required("City is required"),
  postal: yup.string().required("Postal Code is required"),
  username: yup.string().required("Username is required"),
});
const Process = () => {
  const formik = useFormik({
    initialValues: {
      username:"",
      mobile: "",
      country: "",
      state: "",
      city: "",
      postal: "",
      wallet: "",
      prefered: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate()
  const handleSubmit = async() =>{

      const data = {
          userName:formik.values.username,
          phoneNumber:formik.values.mobile,
          country:formik.values.country,
          state:formik.values.state,
          wallet:formik.values.wallet,
          pref:formik.values.prefered,
          postal:formik.values.postal
      }
      const token = await refreshUser({ refreshTokenString: cookies.token });
      const update =  await updateUser(token.data.newToken, data);
      if(update.data.message.title === "ok"){
        navigate("/user/profile")
      }
     
         
      
  }


  useEffect(()=>{
    const countries : any = axiosUtil("Get","http://localhost:8080/country", null, null);
    countries.then((data:any)=>{

      setCountries(data.data)
    })
    if (!cookies.token) {
      removeCookie("token", { path: "/" });
      navigate("/");
    }

    authUser(cookies.token).then((data) => {
      if (!data || data.data.message.title === "bad") {
        removeCookie("token", { path: "/" });
        navigate("/");
      }

      if (data.data.message.description === "toProcess") {
        navigate("/process");
      }

      if (data.data.message.description === "toVerify") {
        navigate("/email/verify");
      }
      
    })

   
  },[])
  
  
  
  return (
    <StyledProcess>
      <div className="pf">
        <div className="logo">
         <img src={Logo} alt=""  />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <Box sx={{ width: "100%" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: { completed?: boolean } = {};
                const labelProps: {
                  optional?: React.ReactNode;
                } = {};

                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <div className="reg_finish">
                  <BiButton bg={secondary} color={white} hover={dark_secondary} >
                    Start Trading
                  </BiButton>
                </div>

                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="form">
                  {activeStep === 0 && (
                    <div className="fm_det">
                       <InputText
                        id="username"
                        type="text"
                        name="username"
                        label="Username"
                        variant="standard"
                        value={formik.values.username}
                        error={
                          formik.touched.username && Boolean(formik.errors.username)
                        }
                        helperText={
                          formik.touched.username && formik.errors.username
                        }
                        formik={formik}
                      />
                      <InputText
                        id="mobile"
                        type="text"
                        name="mobile"
                        label="Phone"
                        variant="standard"
                        value={formik.values.mobile}
                        error={
                          formik.touched.mobile && Boolean(formik.errors.mobile)
                        }
                        helperText={
                          formik.touched.mobile && formik.errors.mobile
                        }
                        formik={formik}
                      />

                      <SelectOption
                        id="country"
                        type="text"
                        name="country"
                        label="Country"
                        value={formik.values.country}
                        country={countries}
                        error={
                          formik.touched.country &&
                          Boolean(formik.errors.country)
                        }
                        formik={formik}
                        variant={undefined}
                      />

                     

                      <InputText
                        id="state"
                        type="text"
                        name="state"
                        label="State"
                        variant="standard"
                        value={formik.values.city}
                        error={
                          formik.touched.state && Boolean(formik.errors.state)
                        }
                        helperText={formik.touched.state && formik.errors.state}
                        formik={formik}
                      />

                      <InputText
                        id="postal"
                        type="text"
                        name="postal"
                        label="Postal Code"
                        variant="standard"
                        value={formik.values.postal}
                        error={
                          formik.touched.postal && Boolean(formik.errors.postal)
                        }
                        helperText={
                          formik.touched.postal && formik.errors.postal
                        }
                        formik={formik}
                      />
                    </div>
                  )}
                  {activeStep === 1 && (
                    <div className="fm_det">
                      <InputText
                        id="wallet"
                        type="text"
                        name="wallet"
                        label="Wallet Address"
                        variant="standard"
                        value={formik.values.wallet}
                        error={
                          formik.touched.wallet && Boolean(formik.errors.wallet)
                        }
                        helperText={
                          formik.touched.wallet && formik.errors.wallet
                        }
                        formik={formik}
                      />
                      <SelectOption
                        id="prefered"
                        type="text"
                        name="prefered"
                        label="Prefered Currency"
                        value={formik.values.prefered}
                        error={
                          formik.touched.prefered &&
                          Boolean(formik.errors.prefered)
                        }
                        formik={formik}
                        variant={undefined}
                        country={countries}
                        
                      />
                    </div>
                  )}
                  {activeStep === 2 && (
                    <div className="fm_det policy">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source. Lorem Ipsum
                      comes from sections 1.10.32 and 1.10.33 of "de Finibus
                      Bonorum et Malorum" (The Extremes of Good and Evil) by
                      Cicero, written in 45 BC. This book is a treatise on the
                      theory of ethics, very popular during the Renaissance. The
                      first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                      comes from a line in section 1.10.32. The standard chunk
                      of Lorem Ipsum used since the 1500s is reproduced below
                      for those interested. Sections 1.10.32 and 1.10.33 from
                      "de Finibus Bonorum et Malorum" by Cicero are also
                      reproduced in their exact original form, accompanied by
                      English versions from the 1914 translation by H. Rackham.
                    </div>
                  )}
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Button
                      color="inherit"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    {isStepOptional(activeStep) && (
                      <Button
                        color="inherit"
                        onClick={handleSkip}
                        sx={{ mr: 1 }}
                      >
                        Skip
                      </Button>
                    )}

                    <Button onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext} disabled={!formik.isValid || !formik.dirty}>
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Box>
                </div>
              </React.Fragment>
            )}
          </Box>
        </form>
      </div>
    </StyledProcess>
  );
};

export default Process;
