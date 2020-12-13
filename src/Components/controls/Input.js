import React from "react";
import { TextField } from "@material-ui/core";

const InputAtom = (props) => {
  const { name, label, value, onChange, variant } = props;
  return (
    <TextField
      variant={variant}
      name={label}
      label={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputAtom;
