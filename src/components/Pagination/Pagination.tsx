import Pagination from '@mui/material/Pagination';
import { Grid } from "@mui/material";
import "./styles.css";

const PaginationComponent = () => {
  return (
    <Grid container className='gridPagination' justifyContent="end" spacing={2}>
    <Pagination count={5} variant="outlined" color="primary" />
    </Grid>
  )
}

export default PaginationComponent;