import React from "react";
import useApi from "../../../hooks/useApi";
import ProductService from "../../../services/Product.service";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IProduct } from "../../../types";

const Home = () => {
  const { data, isLoading } = useApi<IProduct[]>(ProductService.getProducts);

  return (
    <>
      <div className="container mx-auto my-4">
        <h1 className="text-center text-3xl font-bold mb-4">
          Featured Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
