import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AdminMang = () => {
  return (
    <div className='container px-4 mt-24 sm:flex sm:items-center sm:justify-between sm:w-full sm:max-w-7xl mb-7'>
      <h1 className='mb-5 text-2xl sm:text-center'>
        Admin Management
        <span className='ml-3 text-sm'>1/1 seats occupied</span>
      </h1>

      <a href='#AdminMang' className='text-blue-500'>
        <button className='px-4 py-3 text-sm font-light border border-blue-500 rounded-full'>
          <span className='mr-2'>
            <FontAwesomeIcon icon={faPlus} />
          </span>
          New User
        </button>
      </a>
    </div>
  );
};

export default AdminMang;
