import MuiInput from "@mui/material/TextField";
import TextField from "@mui/material/TextField";

const InputField = ({ label, value, onChange, ...props }) => {
  return (
    <TextField
      style={{ width: "100%", marginTop: "1rem" }}
      label={label}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export { InputField };
