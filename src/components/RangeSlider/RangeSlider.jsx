import React from 'react';
import './RangeSlider.css';

function RangeSlider({ ...delegated }) {
  const id = React.useId();

  return (
    <label htmlFor={id}>
      <input {...delegated} type='range' id={id}></input>
    </label>
  );
}

export default RangeSlider;
