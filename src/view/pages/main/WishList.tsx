import React, { useState } from "react";

// types
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const WishList = () => {
  const [wishlist, setWishlist] = useState<Product[]>([
    {
      id: "1",
      name: "Product 1",
      price: 50,
      imageUrl: "https://source.unsplash.com/400x400/?product",
    },
    {
      id: "2",
      name: "Product 2",
      price: 75,
      imageUrl: "https://source.unsplash.com/400x400/?product",
    },
    {
      id: "3",
      name: "Product 3",
      price: 100,
      imageUrl: "https://source.unsplash.com/400x400/?product",
    },
  ]);

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((product) => product.id !== productId)
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Wishlist</h2>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white border shadow-sm rounded-lg overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">${product.price}</p>
                <button
                  onClick={() => handleRemoveFromWishlist(product.id)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishList;
