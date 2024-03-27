import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  return (
    <div className={`${props.className} py-3 w-full lg:w-2/3`} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label={props.label}
          onChange={handleChange}
        >
          {props.items?.map((item) => (
            <MenuItem value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
