import React, { useState } from "react";

// types
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Product 1",
      price: 100,
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 50,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (id: number) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {cartItems.length === 0 ? (
        <p className="text-center text-xl font-bold">
          Your cart is currently empty.
        </p>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-8">Your Cart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-md overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/id/${item.id}/200/200`}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-2">
                    ${item.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.valueAsNumber)
                      }
                      className="mx-2 border-gray-400 border rounded-md px-2 py-1 w-16"
                    />
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="bg-red-500 text-white font-medium px-2 py-1 rounded-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="text-right">
              <p className="text-lg font-bold">
                Total: ${totalAmount.toFixed(2)}
              </p>
              <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
