import { Box, Paper } from "@mui/material";
import CardGroup from "../../components/CardGroup/CardGroup";
import PaginationComponent from "../../components/Pagination/Pagination";
import SelectGroup from "../../components/SelectGroup/SelectGroup";
import "./styles.css";

const Search = () => {
  return (
    <Paper className="paperSearch" elevation={5}>
      <Box sx={{ flexGrow: 1 }}>
        <SelectGroup />
        <CardGroup />
        <PaginationComponent />
      </Box>
    </Paper>
  );
};

export default Search;
