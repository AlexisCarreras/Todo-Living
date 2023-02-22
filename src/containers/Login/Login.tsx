import { Box, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import Inputs from "../../components/InputsLogin/Inputs";
import "./styles.css";

const Login = () => {
  return (
    <Paper className="papperLogin">
      <Box className="headerLogin" sx={{ flexGrow: 1 }}>
        <Typography className="titleLogin" variant="subtitle1" gutterBottom>
          Iniciar sesión
        </Typography>
        <Typography className="subtitleLogin" variant="subtitle1" gutterBottom>
          Ingrese su correo electrónico y contraseña para iniciar sesión
        </Typography>
      </Box>
      <div className="bodyLogin">
        <Box sx={{ flexGrow: 1 }}>
          <Inputs />
          <FormControlLabel
            control={<Switch className="switchLogin" defaultChecked />}
            label="Recordarme"
          />
        </Box>
        <Box className="containerButtonLogin" sx={{ flexGrow: 1 }}>
          <Button variant="contained" className="buttonSearch buttonLogin">
            Iniciar Sesión
          </Button>
        </Box>
        <Box className="containerFooterLogin" sx={{ flexGrow: 1 }}>
          <Typography className="footerLogin" variant="subtitle1" gutterBottom>
            ¿No puedes iniciar sesión?
          </Typography>
          <Button className="buttonInfoLogin">Haz click aquí.</Button>
        </Box>
      </div>
    </Paper>
  );
};

export default Login;
