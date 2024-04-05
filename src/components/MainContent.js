import React from "react";
const MainContent = ({ children }) => (
  <div>
    <h1 className='mb-10'>What can I do as a team ?</h1>
    <div className=' flex gap-8 justify-between'>{children}</div>
  </div>
);
export default MainContent;
