import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// types
interface StoreSettingsFormData {
  storeName: string;
  storeDescription: string;
  storeLogoUrl: string;
  storeBannerUrl: string;
  storeAddress: string;
  storeCity: string;
  storeCountry: string;
  storePostalCode: string;
}

const StoreSettings = () => {
  const [formData, setFormData] = useState<StoreSettingsFormData>({
    storeName: "",
    storeDescription: "",
    storeLogoUrl: "",
    storeBannerUrl: "",
    storeAddress: "",
    storeCity: "",
    storeCountry: "",
    storePostalCode: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StoreSettingsFormData>();

  const onSubmit = (data: StoreSettingsFormData) => {
    setFormData(data);
    // Make API call to update store settings here
  };
  return (
    <div className="mx-auto max-w-7xl pt-10 pb-16 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
          <div className="sm:col-span-6">
            <h2 className="text-lg font-medium text-gray-900">
              Store Information
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Fill out your store information below.
            </p>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="storeName"
              className="block text-sm font-medium text-gray-700"
            >
              Store Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                {...register("storeName", { required: true })}
                className={`${
                  errors.storeName ? "border-red-500" : ""
                } focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
              />
              {errors.storeName && (
                <span className="text-sm text-red-500">
                  Store name is required
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="storeDescription"
              className="block text-sm font-medium text-gray-700"
            >
              Store Description
            </label>
            <div className="mt-1">
              <textarea
                {...register("storeDescription", { required: true })}
                className={`${
                  errors.storeDescription ? "border-red-500" : ""
                } focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
              />
              {errors.storeDescription && (
                <span className="text-sm text-red-500">
                  Store description is required
                </span>
              )}
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="storeLogoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Store Logo URL
            </label>
            {/* <div className="mt-1">
              <input
                type="url"
                {...register("storeLogoUrl", { required: true })}; */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default StoreSettings;
