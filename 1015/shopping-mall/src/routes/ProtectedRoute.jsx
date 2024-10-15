import React from "react";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ authentication }) => {
  return authentication ? <ProductDetail /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
