import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

interface props {
  id: string;
  name: string;
  label: string;
  variant: any;
  formik: any;
  value: string;
  error?: boolean;
  type: string;
  inputProps?: any;
  country: any;
 
}

const SelectOption = ({
  id,
  name,
  label,
  variant,
  formik,
  value,
  error,
  type,
  country,
 
}: props) => {

  
  return (
    <div style={{ marginTop: "1rem" }}  >
      <FormControl variant="standard" style={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id={id}
          type={type}
          name={name}
          fullWidth
          label={label}
          value={value}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={error}
        >
         
          {country.map((i: any) => {

            return <MenuItem value={i.countryName} key={i.countryId}>{i.countryName}</MenuItem>
          })}
        </Select>
      </FormControl>
      {error && (
        <div
          className="css-1d1r5q-MuiFormHelperText-root"
          style={{ color: "red" }}
        >
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default SelectOption;
