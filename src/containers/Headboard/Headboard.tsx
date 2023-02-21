import { Box, Paper, Grid } from "@mui/material";
import NavBar from "../../components/shared/NavBar/NavBar";
import Typography from "@mui/material/Typography";
import "./styles.css";

const Headboard = () => {
  return (
    <Paper elevation={5}>
      <section className="header">
        <Box sx={{ flexGrow: 1 }}>
          <NavBar />
          <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            className="gridTitle"
          >
            <Typography variant="h3" className="titlePage" gutterBottom>
              Bienvenido a Todo Living
            </Typography>
            <Typography variant="body1" className="bodyPage" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quos blanditiis tenetur unde suscipit.
            </Typography>
          </Grid>
        </Box>
      </section>
    </Paper>
  );
};

export default Headboard;
