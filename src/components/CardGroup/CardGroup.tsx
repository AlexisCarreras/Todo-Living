import CardComponent from "./Card/CardComponent";
import { Grid } from "@mui/material";

const CardGroup = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      <Grid item>
        <CardComponent
          img="https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          stock="SD"
          title="Sillón Individual"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          placeat sit. Voluptatum aperiam."
        />
      </Grid>
      <Grid item>
        <CardComponent
          img="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          stock="SD"
          title="Sillón Doble"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        placeat sit. Voluptatum aperiam."
        />
      </Grid>
      <Grid item>
        <CardComponent
          img="https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
          stock="SS"
          title="Sillón Doble"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        placeat sit. Voluptatum aperiam."
        />
      </Grid> 
    </Grid>
  );
};

export default CardGroup;
