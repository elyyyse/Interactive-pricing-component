import React from 'react';

import useToggle from '../../hooks/use-toggle';
import './PricingToggle.css';
import RangeSlider from '../RangeSlider';
import Button from '../Button/Button';

import { VALID_VALUES } from '../../constants';

function PricingToggle() {
  const [pricing, setPricing] = React.useState({
    pageviews: '100K',
    pricePerMonth: 16,
    pricePerYear: 144,
  });
  const [rangeIndex, setRangeIndex] = React.useState(2);
  const [yearlyBilling, toggleYearlyBilling] = useToggle(false);

  React.useEffect(() => {
    setPricing({
      pageviews: VALID_VALUES[rangeIndex].pageviews,
      pricePerMonth: VALID_VALUES[rangeIndex].pricePerMonth,
      pricePerYear: VALID_VALUES[rangeIndex].pricePerYear,
    });
  }, [rangeIndex]);

  const { pageviews, pricePerMonth, pricePerYear } = pricing;

  return (
    <div className='pricing-container'>
      {/* 'pricing-row' is for Desktop view only */}
      <div className='pricing-row desktop'>
        <div className='pageviews'>
          <span>{pageviews} </span>PAGEVIEWS
        </div>

        <div className='price-container'>
          <span className='price'>
            ${yearlyBilling ? pricePerYear : pricePerMonth}.00{' '}
          </span>
          <span className='billing-cadence'>
            / {yearlyBilling ? 'year' : 'month'}
          </span>
        </div>
      </div>

      <div className='pageviews mobile'>
        <span>{pageviews} </span>PAGEVIEWS
      </div>

      <div className='range-slider'>
        <RangeSlider
          min={0}
          max={4}
          step={1}
          value={rangeIndex}
          onChange={e => {
            setRangeIndex(e.target.value);
          }}
        />
      </div>

      <div className='price-container mobile'>
        <span className='price'>
          ${yearlyBilling ? pricePerYear : pricePerMonth}.00{' '}
        </span>
        <span className='billing-cadence mobile'>
          / {yearlyBilling ? 'year' : 'month'}
        </span>
      </div>

      <div className='billing-toggle-container'>
        <span className='billing-cadence-option'>Monthly Billing</span>
        <Button
          as='toggle'
          label='Yearly billing toggle'
          checked={yearlyBilling}
          onClick={toggleYearlyBilling}
        ></Button>
        <span className='billing-cadence-option'>Yearly Billing</span>
        <span className='yearly-billing-discount mobile'>-25%</span>
        <span className='yearly-billing-discount desktop'>25% discount</span>
      </div>
    </div>
  );
}

export default PricingToggle;
