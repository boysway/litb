import { TextField } from "@mui/material";


interface props {
  id: string;
  name: string;
  label: string;
  variant: any;
  formik: any;
  value: string;
  error?: boolean;
  helperText?: boolean | string;
  type: string;
  inputProps?:any;
  multiline?: any;
  row?:any

}
const InputText = ({
  id,
  name,
  label,
  variant,
  formik,
  value,
  error,
  helperText,
  type,
  inputProps,
  multiline,
  row
}: props) => {
  return (
    <div style={{ marginTop: "0.6rem" }}>
      <TextField
        autoComplete="off"
        id={id}
        type={type}
        name={name}
        fullWidth
        multiline={multiline}
        maxRows={row}
        label={label}
        variant={variant}
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={error}
        helperText={helperText}
        InputProps={inputProps}
      />
    </div>
  );
};

export default InputText;
