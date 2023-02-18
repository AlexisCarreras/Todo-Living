import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import HelpIcon from "@mui/icons-material/Help";
import EmailIcon from "@mui/icons-material/Email";
import "./styles.css";

const Header = () => {
  return (
    <AppBar className="appBar" color="transparent" position="static">
      <Toolbar>
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Typography
              className="title"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Todo Living
            </Typography>
          </Grid>
          <Grid item xs={8} className="title">
            <Button className="buttonsHeader" endIcon={<SearchIcon />}>
              Buscar
            </Button>
            <Button
              className="buttonsHeader"
              endIcon={<ConnectWithoutContactIcon />}
            >
              Clientes
            </Button>
            <Button className="buttonsHeader" endIcon={<HelpIcon />}>
              Preguntas Frecuentes
            </Button>
            <Button className="buttonsHeader" endIcon={<EmailIcon />}>
              Contacto
            </Button>
            <Button
              className="buttonsHeader"
              variant="contained"
              color="primary"
            >
              Iniciar Sesión
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
