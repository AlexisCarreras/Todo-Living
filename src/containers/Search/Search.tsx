import { Box, Paper, Grid } from "@mui/material";
import CardGroup from "../../components/CardGroup/CardGroup";
import SelectGroup from "../../components/SelectGroup/SelectGroup";
import "./styles.css";

const Search = () => {
  return (
    <Paper className="paperSearch" elevation={5}>
      <Box sx={{ flexGrow: 1 }}>
        <SelectGroup />
        <CardGroup />
      </Box>
    </Paper>
  );
};

export default Search;
