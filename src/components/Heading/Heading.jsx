import React from 'react';

import './Heading.css';

function Heading({ heading, subHeadOne, subHeadTwo }) {
  return (
    <div className='heading'>
      <h1>{heading}</h1>
      <div className='sub-head'>
        <p>{subHeadOne} </p>
        {subHeadTwo && <p className='sub-head-two'>{subHeadTwo}</p>}
      </div>
    </div>
  );
}

export default Heading;
