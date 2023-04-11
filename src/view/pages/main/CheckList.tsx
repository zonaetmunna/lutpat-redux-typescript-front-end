import React, { useState } from "react";

// types
interface CheckoutFormData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
}

const CheckList = () => {
  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // submit form data to server
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              required
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
            />
          </div>
          <div>
            {/* <label htmlFor="country" className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              id="country"
              name="country"
              required */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckList;
