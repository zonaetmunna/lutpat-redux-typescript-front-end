import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../../../hooks/useApi";
import { IProduct } from "../../../types";
import ProductService from "../../../services/Product.service";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartAction";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const { data, isLoading, isSuccess, isError, error } = useApi<IProduct>(() =>
    ProductService.getProductByID(id)
  );
  console.log(data);
  const { name, image, description, price } = (data || {}) as IProduct;

  const handleAddToCart = (data: IProduct) => {
    dispatch(addToCart(data));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {isLoading && <h3>Loading ....</h3>}
        {isSuccess && (
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
            {/* Product image */}
            <div className="lg:col-span-7">
              <div className="flex justify-center">
                <img
                  src={data?.image}
                  alt={data?.name}
                  className="h-96 object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Product information */}
            <div className="mt-10 lg:mt-0 lg:col-span-5">
              <div className="bg-white rounded-lg shadow-lg px-5 py-6 lg:p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                  {data?.name}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {data?.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-lg font-medium text-gray-900">
                    ${data?.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(data as IProduct)}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
                  >
                    Add to Cart
                  </button>
                </div>
                <ul className="text-gray-600 text-lg">
                  {/* <li className="mb-2">
                  <span className="font-medium mr-2">Brand:</span>
                  {brand}
                </li> */}
                  {/* <li className="mb-2">
                  <span className="font-medium mr-2">Category:</span>
                  {product.category}
                </li> */}
                  {/* <li className="mb-2">
                  <span className="font-medium mr-2">Availability:</span>
                  {product.available ? "In Stock" : "Out of Stock"}
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
