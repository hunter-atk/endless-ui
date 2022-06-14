import React from 'react';
import classnames from 'classnames';

// styles
import './Text.css';

const TEXT_FONT_TYPE_TO_CLASSNAME_MAPPING = {
  lato: 'font-lato',
  latoLight: 'font-lato-light',
}

const TEXT_COLOR_TYPE_TO_CLASSNAME_MAPPING = {
  white: 'font-white',
  darkGray: 'font-dark-gray',
}

// props
interface IProps {
  align?: any;
  color: 'white' | 'darkGray';
  font: 'lato' | 'latoLight';
  size?: string;
  lineHeight?: string;
  children: string;
}

const Box: React.FC<IProps> = ({
  align,
  color,
  font,
  size,
  lineHeight,
  children,
}) => (
    <div
      style={{
        fontSize: size,
        lineHeight,
        textAlign: align,
      }}
      className={classnames(
        TEXT_COLOR_TYPE_TO_CLASSNAME_MAPPING[color],
        TEXT_FONT_TYPE_TO_CLASSNAME_MAPPING[font],
      )}
    >
      {children}
    </div>
);

export default Box;