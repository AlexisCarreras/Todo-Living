import AppBar from "@mui/material/AppBar";
import { Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import EmailIcon from "@mui/icons-material/Email";
import { NavLink } from "react-router-dom";
import "./styles.css";
import Avatar from "@mui/material/Avatar";

const UserNavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={0}>
            <Grid item className="titleUser" xs={4}>
              <Typography
                className="titleUser"
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
              >
                Todo Living
              </Typography>
            </Grid>
            <Grid item xs={8} className="titleUser">
              <NavLink to="/" className="navLink">
                <Button className="buttonsHeader" endIcon={<SearchIcon />}>
                  Buscar
                </Button>
              </NavLink>
              <NavLink to="/" className="navLink">
                <Button
                  className="buttonsHeader"
                  endIcon={<ConnectWithoutContactIcon />}
                >
                  Clientes
                </Button>
              </NavLink>
              <NavLink to="/" className="navLink">
                <Button className="buttonsHeader" endIcon={<HelpIcon />}>
                  Preguntas Frecuentes
                </Button>
              </NavLink>
              <NavLink to="/" className="navLink">
                <Button className="buttonsHeader" endIcon={<EmailIcon />}>
                  Contacto
                </Button>
              </NavLink>
              <Avatar className="buttonsHeader" alt="Avatar User" />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default UserNavBar;
