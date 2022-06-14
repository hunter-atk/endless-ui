import React from 'react';

// styles
import './Button.css';

// props
interface IProps {
  children: string;
}

const Box: React.FC<IProps> = ({
  children,
}) => (
    <button
      className='button'
    >
      {children}
    </button>
);

export default Box;