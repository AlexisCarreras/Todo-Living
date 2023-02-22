import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Login from "../../containers/Login/Login";
import "./styles.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      className="loginPage"
      alignItems="center"
      spacing={2}
    >
      <section className="backgroundLogin">
        <NavLink to="/" className="navLink">
          <Button className="buttonBack" startIcon={<ArrowBackIcon />}>
            Volver
          </Button>
        </NavLink>
      </section>
      <Login />
    </Grid>
  );
};

export default LoginPage;
