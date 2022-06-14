import React from 'react';

// components
import Box from '../Box/Box';

// props
interface IProps {
  children: any;
}

const Container: React.FC<IProps> = ({ children }) => (
    <Box
      maxWidth='1130px'
      margin='0 auto' 
      padding='0 30px'
    >
      {children}
    </Box>
);

export default Container;