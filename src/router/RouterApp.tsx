import Main from "../pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </>
  );
};

export default RouterApp;
