import { Box, Paper } from "@mui/material";
import DrawerUser from "../../components/DrawerUser/DrawerUser";
import InputsProducts from "../../components/InputsProducts/InputsProducts";
import "./styles.css";

const NewProduct = () => {
  return (
    <Paper className="paperNewProduct" elevation={5}>
      <Box sx={{ flexGrow: 1 }}>
        {/* <InputsProducts /> */}
        <DrawerUser />
      </Box>
    </Paper>
  );
};

export default NewProduct;
