import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

export const styles = {
  transition: 'transition-colors duration-300',
  base: 'flex items-center justify-center whitespace-nowrap select-none',
  size: {
    icon: "w-11 h-11",
    md: "h-12 px-9 font-semibold leading-[100%] tracking-[-0.02em]",
    sm: "h-11 px-9 font-semibold text-base"
  },
  theme: {
    'white-primary': "bg-primary-2 text-white border border-primary-3 rounded-full hover:bg-primary-4",
    'white-secondary': "bg-primary-3 text-white rounded-full hover:bg-primary-5",
    'white-green': "bg-green-1 rounded-full",
    'white-pink': "bg-pink-1 rounded-full"
  },
}; 

function Button({
  className = null,
  to = null,
  size,
  theme,
  children,
  transition = false,
  ...otherProps
}) {
  const Tag = to ? Link : 'button';

  return (
    <Tag
      className={clsx(
        styles.base, 
        styles.size[size], 
        styles.theme[theme], 
        transition && styles.transition, 
        className
      )}
      to={to}
      {...otherProps}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
  transition: PropTypes.bool,
};

export default Button;
