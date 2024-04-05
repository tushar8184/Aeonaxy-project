import React, { useState, useRef, useEffect } from "react";

const DropdownMenu = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  return (
    <div className='relative' ref={dropdownRef}>
      <div onClick={toggleDropdown}>{trigger}</div>{" "}
      {isOpen && (
        <div className='absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl'>
          {" "}
          {children}
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;
