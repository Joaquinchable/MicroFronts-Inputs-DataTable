import React from "react";
import { TextField } from "@material-ui/core";

const InputAtom = (props) => {
  const { name, label, value, onChange, variant, error=null } = props;
  return (
    <TextField
      variant={variant}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && {error:true,helperText:error})}
    />
  );
};

export default InputAtom;
