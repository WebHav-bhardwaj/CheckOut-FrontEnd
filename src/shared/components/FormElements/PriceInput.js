import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function PriceInput(props) {
  return (
    <div className={`${props.className} py-3 w-full lg:w-2/3 `}>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          type="number"
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">₹</InputAdornment>}
          label="Amount"
        />
      </FormControl>
    </div>
  );
}
