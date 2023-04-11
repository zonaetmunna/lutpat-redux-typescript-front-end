import React, { useState } from "react";

// types
interface PaymentFormData {
  cardholderName: string;
  cardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  cvv: string;
}

const Payment = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardholderName: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
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
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8">Payment Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cardholderName"
                className="block text-sm font-medium text-gray-700"
              >
                Cardholder Name
              </label>
              <input
                type="text"
                name="cardholderName"
                id="cardholderName"
                required
                value={formData.cardholderName}
                onChange={handleInputChange}
                className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                required
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="expirationMonth"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration Month
              </label>
              <input
                type="text"
                name="expirationMonth"
                id="expirationMonth"
                required
                value={formData.expirationMonth}
                onChange={handleInputChange}
                className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="expirationYear"
                className="block text-sm font-medium text-gray-700"
              >
                Expiration Year
              </label>
              <input
                type="text"
                name="expirationYear"
                id="expirationYear"
                required
                value={formData.expirationYear}
                onChange={handleInputChange}
                className="mt-1 px-2 py-1 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
              />
            </div>
            {/* <div>
            <label htmlFor="cvv" className=" */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
