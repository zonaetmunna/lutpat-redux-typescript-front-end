import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// types
interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center">Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className={`appearance-none border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic mt-2">
                This field is required
              </p>
            )}
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              email
            </label>
            <input
              id="email"
              type="email"
              className={`appearance-none border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic mt-2">
                This field is required
              </p>
            )}
          </div>
          <div className="mt-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`appearance-none border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline`}
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-2">
                This field is required
              </p>
            )}
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
