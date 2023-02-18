import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectProps } from "./types";
import "./styles.css";

const SelectInput = ({ label }: SelectProps) => {
  return (
    <Grid container className="gridSelect" flex-direction="colum">
        <InputLabel htmlFor="input-with-icon-adornment" className="labelSelect">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          //   value={age}
          //   onChange={handleChange}
          variant="standard"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
    </Grid>
  );
};

export default SelectInput;
