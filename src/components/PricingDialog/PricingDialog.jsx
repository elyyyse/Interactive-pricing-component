import React from 'react';

import './PricingDialog.css';
import Button from '../Button/Button';
import PricingToggle from '../PricingToggle/PricingToggle';
import FeaturesList from '../FeaturesList/FeaturesList';

import { FEATURED_BENEFITS } from '../../constants';

function PricingDialog() {
  return (
    <div className='dialog'>
      <PricingToggle />
      <hr />
      <div className='cta-desktop'>
        <FeaturesList>
          {FEATURED_BENEFITS.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </FeaturesList>
        <div className='cta-button'>
          <Button as='cta'>Start my trial</Button>
        </div>
      </div>
    </div>
  );
}

export default PricingDialog;
