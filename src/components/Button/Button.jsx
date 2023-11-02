import React from 'react';
import './Button.css';

const VALID_CLASSNAMES = ['cta', 'toggle'];

function Button({
  as: className = 'cta',
  label,
  checked,
  children,
  ...delegated
}) {
  const id = React.useId();

  if (!VALID_CLASSNAMES.includes(className)) {
    throw new Error(
      `Unexpected className: ${className}. Expected: ${VALID_CLASSNAMES}`
    );
  }

  const toggledOn = `${className} checked`;

  return (
    <div>
      <label htmlFor={id}></label>
      <button
        id={id}
        className={checked ? toggledOn : className}
        aria-label={label}
        {...delegated}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
