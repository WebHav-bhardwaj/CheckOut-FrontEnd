import React from "react";

import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

const Input = (props) => {
  const element =
    props.element === "input" ? (
      <TextField
        id={props.id}
        label={props.label}
        helperText={props.placeholder}
        type = {props.type}
      />
    ) : (
      <TextField
        id={props.id}
        label={props.label}
        multiline
        rows={4}
        helperText={props.placeholder}
      />
    );
  return (
    <div className={`${props.className} py-3 w-full lg:w-2/3`}>
      <FormControl fullWidth>{element}</FormControl>
    </div>
  );
};

export default Input;
