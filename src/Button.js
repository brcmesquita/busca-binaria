import React from 'react';

const Button = ({ onClick, texto, classe }) => {
  return (
    <button onClick={onClick} className={classe}>
      {texto}
    </button>
  );
};

export default Button;
