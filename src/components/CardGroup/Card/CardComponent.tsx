import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
import { CardProps } from "./type";
import { Chip } from "@mui/material";

const CardComponent = ({ img, stock, title, description }: CardProps) => {
  return (
    <Card sx={{ maxWidth: 400 }} className="card">
      <div className="containerImgCard">
        <CardMedia
          className="imgCard"
          component="img"
          alt="img"
          height="230"
          image={img}
        />
        <div className="box"></div>
      </div>
      <CardContent className="cardContent">
        <Typography
          className="titleCard"
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography
          className="descriptionCard"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={stock === "SD" ? "buttonCard" : "buttonCardDisabled"}
          disabled={stock === "SD" ? false : true}
          variant="outlined"
          size="small" 
        >
          Ver Detalle
        </Button>
        <Chip
          className="chipCard"
          color={stock === "SD" ? "info" : "warning"}
          label={stock === "SD" ? "Stock Disponible" : "Sin Stock"}
        />
      </CardActions>
    </Card>
  );
};

export default CardComponent;
