import Main from "../pages/Main/Main";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products/Products";
import LoginPage from "../pages/Login/LoginPage";

const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
    </>
  );
};

export default RouterApp;
