import React from "react";

const Cards = ({ icon, title, description, cta }) => (
  <div className='p-4 my-10 rounded-lg shadow bg-slate-100'>
    <div className='flex items-center mb-4 space-x-4'>
      {icon && <div className='flex-shrink-0 p-7 sm:p-7'>{icon}</div>}
      <div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
        {cta}
      </div>
    </div>
  </div>
);
export default Cards;
