import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import SelectInput from "./Select/Select";
import "./styles.css";

const SelectGroup = () => {
  return (
    <Grid container className="gridSelectGroup" justifyContent="center" spacing={2}>
      <SelectInput label="Modelos" />
      <SelectInput label="Telas" />
      <SelectInput label="Colores" />
      <Button variant="contained" className="buttonSearch">Buscar</Button>
    </Grid>
  );
};

export default SelectGroup;
