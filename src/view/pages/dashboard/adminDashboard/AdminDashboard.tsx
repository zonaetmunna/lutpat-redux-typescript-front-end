import React, { useState } from "react";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { MdDashboard, MdStore } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// types
interface MenuItem {
  name: string;
  icon: JSX.Element;
  route: string;
}

/* const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <MdDashboard />, route: "/" },
  { name: "Products", icon: <FaShoppingCart />, route: "/products" },
  { name: "Orders", icon: <FaUserAlt />, route: "/orders" },
  { name: "Store Settings", icon: <MdStore />, route: "/store-settings" },
]; */

const AdminDashboard = () => {
  /* const [activeRoute, setActiveRoute] = useState<string>(menuItems[0].route);
  const navigate = useNavigate(); */
  /*  const handleMenuItemClick = (route: string) => {
    setActiveRoute(route);
    navigate(route);
  };
 */
  /* const handleLogoutClick = () => {
    // TODO: Handle logout logic
  }; */
  return (
    <h1>hi</h1>
    // <div className="flex min-h-screen">
    //   {/* Sidebar */}
    //   <div className="bg-gray-800 text-white flex-none w-64 py-4 px-6 flex flex-col justify-between">
    //     <div className="flex items-center justify-center mb-6">
    //       <h1 className="text-2xl font-bold uppercase">Admin Dashboard</h1>
    //     </div>
    //     <div className="flex flex-col">
    //       {menuItems.map((menuItem) => (
    //         <button
    //           key={menuItem.route}
    //           onClick={() => handleMenuItemClick(menuItem.route)}
    //           className={`${
    //             activeRoute === menuItem.route
    //               ? "bg-gray-900 text-white"
    //               : "hover:bg-gray-700"
    //           } py-2 px-4 rounded-md text-sm flex items-center space-x-2`}
    //         >
    //           {menuItem.icon}
    //           <span>{menuItem.name}</span>
    //         </button>
    //       ))}
    //     </div>
    //     <button
    //       onClick={handleLogoutClick}
    //       className="bg-red-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-red-600"
    //     >
    //       <HiOutlineLogout className="inline-block mr-2" />
    //       Logout
    //     </button>
    //   </div>
    //   {/* Content */}
    //   <div className="flex-1 bg-gray-100 py-8 px-12">
    //     {/* Replace with router switch */}
    //     <h2 className="text-2xl font-bold mb-4">{activeRoute}</h2>
    //     <p>This is the content for the {activeRoute} page.</p>
    //   </div>
    // </div>
  );
};

export default AdminDashboard;
