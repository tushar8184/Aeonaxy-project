import React from "react";
const TabItem = ({ isActive, onClick, children }) => (
  <li
    className={`cursor-pointer mr-7 py-2 text-sm font-medium text-center
                ${
                  isActive
                    ? "text-blue-500 border-b-2 border-blue-500"
                    : "text-gray-60hover:text-gray-800"
                }`}
    onClick={onClick}
  >
    {children}
  </li>
);
export default TabItem;
