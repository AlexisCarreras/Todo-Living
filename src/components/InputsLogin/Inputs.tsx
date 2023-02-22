import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import { InputLabel } from "@mui/material";
import "./styles.css";

const Inputs = () => {
  return (
    <Grid container direction="column" spacing={0}>
      <InputLabel className="inputLabelLogin" htmlFor="my-input">Email</InputLabel>
      <Input
        className="inputLogin"
        placeholder="usuario@ejemplo.com"
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <InputLabel className="inputLabelLogin" htmlFor="my-input">Password</InputLabel>
      <Input
        className="inputLogin"
        placeholder="********"
        type="password"
        id="my-input"
        aria-describedby="my-helper-text"
      />
    </Grid>
  );
};

export default Inputs;
