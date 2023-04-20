import * as yup from "yup";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import { GiBuyCard, GiOpenPalm } from "react-icons/gi";
import { RiAdvertisementFill } from "react-icons/ri";
import BiButton from "../../components/BiButton";
import IconLabelTabs from "../../components/IconLabelTabs";
import InputText from "../../components/InputText";
import TransitionsModal from "../../components/Modal";
import AdTable from "../../components/Table";
import { getColors } from "../../util/assets";
import { StyledTrade } from "./style";
import SelectOption from "../../components/SelectOption";

const { secondary, white, dark_secondary } = getColors;

const validationSchema = yup.object({
  price: yup.number().required("price is required"),
  location: yup.string().required("Payment method is required"),
  payment: yup.string().required("Location is required"),
  min: yup.number().required("Minimum value is required"),
  max: yup.number().required("Maximum value is required"),

});

const Trade = () => {
  const formik = useFormik({
    initialValues: {
      price: "",
      min: "",
      max: "",
      terms:"",
      location: "",
      payment: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <StyledTrade>
      <div className="bal">
        <div className="bal_sl">
          <h1>20</h1>
          <p>Total Sales</p>
        </div>
        <div className="bal_by">
          <h1>20</h1>
          <p>Total Buy</p>
        </div>
        <div className="bal_pen">
          <h1>20</h1>
          <p>Total Pending</p>
        </div>
      </div>
      <div className="tab">
        <div className="tb">
          <IconLabelTabs
            tabs={[
              {
                icon: <RiAdvertisementFill fontSize={"2rem"} />,
                label: "Your Ads",
                index: 0,
                children: (
                  <>
                    <div className="tb_ttl">
                      <p>Your Ads</p>
                      <BiButton
                        bg={getColors.primary}
                        hover={getColors.dark_primary}
                        color={getColors.white}
                        click={handleOpen}
                      >
                        + Create new Ad
                      </BiButton>
                    </div>

                    <div className="tb_srch">
                      <AdTable />
                    </div>
                  </>
                ),
              },
              {
                icon: <GiOpenPalm fontSize={"2rem"} />,
                label: "Open Trades",
                index: 1,
                children: (
                  <>
                    <div className="tb_ttl by">
                      <p>Open trades for buying</p>
                    </div>

                    <div className="tb_srch">
                      <AdTable />
                    </div>
                    <div className="tb_ttl sl">
                      <p>Open trades for selling</p>
                    </div>

                    <div className="tb_srch">
                      <AdTable />
                    </div>
                  </>
                ),
              },
              {
                icon: <BsClockHistory fontSize={"2rem"} />,
                label: "Open Trades",
                index: 2,
                children: (
                  <>
                    <div className="tb_ttl by">
                      <p>Past trades for buying</p>
                    </div>

                    <div className="tb_srch">
                      <AdTable />
                    </div>
                    <div className="tb_ttl sl">
                      <p>Past trades for selling</p>
                    </div>

                    <div className="tb_srch">
                      <AdTable />
                    </div>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <TransitionsModal open={open} handleClose={handleClose}>
        <div className="inputs">
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                I want to
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="buy"
                  control={
                    <Radio
                      sx={{
                        color: getColors.primary,
                        "&.Mui-checked": {
                          color: getColors.dark_primary,
                        },
                      }}
                    />
                  }
                  label="Buy"
                />
                <FormControlLabel
                  value="sell"
                  control={
                    <Radio
                      sx={{
                        color: getColors.primary,
                        "&.Mui-checked": {
                          color: getColors.dark_primary,
                        },
                      }}
                    />
                  }
                  label="Sell"
                />
              </RadioGroup>
            </FormControl>
            <InputText
              id="location"
              type="text"
              name="location"
              label="Location"
              variant="standard"
              value={formik.values.location}
              error={formik.touched.location && Boolean(formik.errors.location)}
              helperText={formik.touched.location && formik.errors.location}
              formik={formik}
            />

            <SelectOption
              id="payment"
              type="text"
              name="payment"
              label="Payment method"
              value={formik.values.payment}
              error={formik.touched.payment && Boolean(formik.errors.payment)}
              formik={formik}
              variant={undefined}
              country={[]}
            />

            <InputText
              id="price"
              type="text"
              name="price"
              label="Price"
              variant="standard"
              value={formik.values.price}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              formik={formik}
            />

            <InputText
              id="min"
              type="text"
              name="min"
              label="Min Transaction limit"
              variant="standard"
              value={formik.values.min}
              error={formik.touched.min && Boolean(formik.errors.min)}
              helperText={formik.touched.min && formik.errors.min}
              formik={formik}
            />

            <InputText
              id="max"
              type="text"
              name="max"
              label="Max Transaction limit"
              variant="standard"
              value={formik.values.max}
              error={formik.touched.max && Boolean(formik.errors.max)}
              helperText={formik.touched.max && formik.errors.max}
              formik={formik}
            />
            <InputText
              id="terms"
              type="text"
              name="terms"
              label="Terms of Trade"
              variant="standard"
              multiline
              row={8}
              value={formik.values.terms}
              error={formik.touched.terms && Boolean(formik.errors.terms)}
              helperText={formik.touched.terms && formik.errors.terms}
              formik={formik}
            />
           
            <div className="sub" style={{ marginTop: "2rem" }}>
              <BiButton bg={secondary} hover={dark_secondary} color={white}>
                Publish Event
              </BiButton>
            </div>
          </form>
        </div>
      </TransitionsModal>
    </StyledTrade>
  );
};

export default Trade;
