/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  transition: 'transition-colors duration-200',
  base: 'subpixel-antialiased inline-block',
  size: {
    md: "font-inter text-base leading-1 tracking-[-0.02em] scale-1 hover:scale-105"
  },
  theme: {
    'white-filled': "text-white"
  },
};

function Link({
  className: additionalClassName = null,
  href = null,
  size = null,
  theme = null,
  children,
  ...props
}) {
  const linkClassName = clsx(
    styles.transition,
    size && theme && styles.base,
    size && styles.size[size],
    theme && styles.theme[theme],
    additionalClassName,
  );


  if (href.toString().startsWith('/')) {
    return (
      <NextLink className={linkClassName} href={href} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={linkClassName} href={href.toString()} {...props}>
      {children}
    </a>
  );
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)),
  theme: PropTypes.oneOf(Object.keys(styles.theme)),
  children: PropTypes.node.isRequired,
};

export default Link;
