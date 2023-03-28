import React from "react";
import useApi from "../../../hooks/useApi";
import ProductService from "../../../services/Product.service";

const Home = () => {
  const { data, isLoading } = useApi(ProductService.getProducts);

  return (
    <div>
      <p>home page</p>
    </div>
  );
};

export default Home;
