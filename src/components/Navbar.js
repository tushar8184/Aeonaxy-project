import React from "react";
import DropdownMenu from "./DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/plogo1.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const trigger = (
    <span className='flex items-center text-white cursor-pointer sm:text-gray-600'>
      Account
      <FontAwesomeIcon icon={faCaretDown} className='ml-1' />
    </span>
  );
  let [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col items-center justify-top'>
      <div className='w-full text-left max-w-7xl bg-slate-300'>
        <nav className='p-0 bg-white shadow'>
          <div className='container fixed items-center justify-between px-4 top-5 sm:static sm:flex sm:w-full sm:items-center sm:justify-between sm:max-w-7xl'>
            <a href='/' className='flex items-center'>
              <img src={logo} alt='Company logo' className='h-16' />
            </a>
            <FontAwesomeIcon
              onClick={() => setOpen(!open)}
              icon={open ? faXmark : faBars}
              className='absolute text-2xl cursor-pointer top-5 sm:hidden right-4'
            />
            <div className='sm:flex sm:items-center '>
              <ul
                className={`sm:transition-none transition-all duration-500 ease-in ${
                  open ? "right-0" : "right-[650px]"
                } absolute sm:static px-2 bg-opacity-80 sm:bg-transparent bg-slate-800 w-full flex py-8 flex-col items-center gap-3 sm:block sm:left-0 sm:flex sm:flex-row sm:items-center sm:space-x-4 nav-menu`}
              >
                <li>
                  <a
                    href='#home'
                    className='text-white sm:text-gray-600 hover:text-gray-800'
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href='#availability'
                    className='text-white sm:text-gray-600 hover:text-gray-800'
                  >
                    Availability
                  </a>
                </li>
                <li>
                  <a
                    href='#integrations'
                    className='text-white sm:text-gray-600 hover:text-gray-800'
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href='#help'
                    className='flex items-center text-white sm:text-gray-600 hover:text-gray-800'
                  >
                    Help <FontAwesomeIcon icon={faCaretDown} className='ml-1' />
                  </a>
                </li>
                <li className='px-4 py-2 border border-4 rounded-full border-slate-400 bg-slate-300'>
                  <a href='www.123@mail.com'>J</a>
                </li>
                <li>
                  <DropdownMenu trigger={trigger}>
                    <a
                      href='#profile'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray- 100'
                    >
                      Profile
                    </a>
                    <a
                      href='#settings'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray- 100'
                    >
                      Settings
                    </a>
                    <a
                      href='#logout'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray- 100'
                    >
                      Logout
                    </a>
                  </DropdownMenu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
