import React from 'react';
import '../../styles/design-tokens.css';
import '../../styles/index.css';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const cls = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`;
  return (
    <button className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
