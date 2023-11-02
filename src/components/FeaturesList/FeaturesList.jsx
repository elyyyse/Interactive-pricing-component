import React from 'react';
import './FeatureList.css';

function FeaturesList({ children, ...delegated }) {
  return (
    <ul className='list' {...delegated}>
      {children}
    </ul>
  );
}

export default FeaturesList;
