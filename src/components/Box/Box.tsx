import React from 'react';

// props
interface IProps {
  display?: string;
  align?: string;
  justify?: string;
  wrap?: any;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  padding?: string;
  margin?: string;
  backgroundAttachment?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  position?: any; // TO-DO: Determine why TypeScript complains when assigning a 'string' type
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children?: any;
}

const Box: React.FC<IProps> = ({
  display,
  align,
  justify,
  wrap,
  width,
  maxWidth,
  height,
  maxHeight,
  padding,
  margin,
  backgroundAttachment,
  backgroundColor,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  position,
  top,
  right,
  bottom,
  left,
  children,
}) => (
    <div
      style={{
        display,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        width,
        maxWidth,
        height,
        maxHeight,
        padding,
        margin,
        backgroundAttachment,
        backgroundColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize,
        backgroundPosition,
        position,
        top,
        right,
        bottom,
        left,
      }}
    >
      {children}
    </div>
);

export default Box;