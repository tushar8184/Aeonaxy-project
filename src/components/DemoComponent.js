import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import logo from "./images/plogo1.png";

const DemoComponent = () => {
  return (
    <div className='flex flex-col items-center mt-16 justify-top'>
      <div className='max-w-7xl w-full p-8 text-left #F5F5F5'>
        <nav className='flex items-center justify-between py-0 bg-red-300 navbar'>
          <div className='logo'>
            <img src={logo} alt='logo' className='w-12 ' />
          </div>
          <div className='nav-body'>
            <ul className='flex gap-2 nav-ul'>
              <li>
                <a href='www.123@mail.com'>Home</a>
              </li>
              <li>
                <a href='www.123@mail.com'>Availability</a>
              </li>
              <li>
                <a href='www.123@mail.com'>Integrations</a>
              </li>
              <li className='select'>
                <a href='www.123@mail.com'>
                  Help
                  <span>
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                  </span>
                </a>
              </li>
              <li>
                <a href='www.123@mail.com'>J</a>
              </li>
              <li>
                <a href='www.123@mail.com'>
                  Account
                  <span>
                    <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DemoComponent;
