import Input from "@mui/material/Input";
import { InputLabel } from "@mui/material";
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const InputsProducts = () => {
  return (
    <>
      <InputLabel className="inputLabelLogin" htmlFor="my-input">
        Modelo
      </InputLabel>
      <Input
        className="inputLogin"
        placeholder=""
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <InputLabel className="inputLabelLogin" htmlFor="my-input">
        Cuerpo
      </InputLabel>
      <Input
        className="inputLogin"
        placeholder=""
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <InputLabel className="inputLabelLogin" htmlFor="my-input">
        Tela
      </InputLabel>
      <Input
        className="inputLogin"
        placeholder=""
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <InputLabel className="inputLabelLogin" htmlFor="my-input">
        Color
      </InputLabel>
      <Input
        className="inputLogin"
        placeholder=""
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <InputLabel className="inputLabelLogin" htmlFor="my-input">
        Código
      </InputLabel>
      <Input
        className="inputLogin"
        placeholder=""
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <InputLabel className="inputLabelLogin" htmlFor="my-input">
        Importe
      </InputLabel>
      <Input
        className="inputLogin"
        placeholder=""
        id="my-input"
        aria-describedby="my-helper-text"
      />
      <Button startIcon={<PhotoCamera  />} variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button>
    </>
  );
};

export default InputsProducts;
