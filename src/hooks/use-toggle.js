import React from 'react';

// Taken from Josh Coumeau's 'Joy of React' course:
// https://www.joyofreact.com/
// It's a great course, you should check it out :)

function useToggle(initialValue = false) {
  if (typeof initialValue !== 'boolean') {
    console.warn('Invalid type for useToggle');
  }

  const [value, setValue] = React.useState(initialValue);

  function toggleValue() {
    setValue(currentValue => !currentValue);
  }

  return [value, toggleValue];
}

export default useToggle;
