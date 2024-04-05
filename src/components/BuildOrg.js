import React from "react";

const BuildOrg = () => {
  return (
    <div className='admin-container '>
      <h1 className='text-2xl font-normal'>Start building your organization</h1>

      <p className='m-8'>
        Invite users to unlock team scheduling features as low as $12 per
        user/mo.
      </p>

      <a className='text-white ' href='#AdminMngmt'>
        <button className='py-3.5 px-5  text-sm bg-blue-500 rounded-full '>
          Invite Users
        </button>
      </a>
    </div>
  );
};

export default BuildOrg;
