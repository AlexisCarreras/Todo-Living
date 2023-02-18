import { Box, Paper, Grid } from "@mui/material";
import SelectGroup from "../../components/SelectGroup/SelectGroup";

const Search = () => {
  return (
    <Paper elevation={5}>
      <Box sx={{ flexGrow: 1 }}>
        <SelectGroup />
      </Box>
    </Paper>
  );
};

export default Search;
