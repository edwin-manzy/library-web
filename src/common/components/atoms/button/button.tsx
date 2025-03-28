import { ReactElement } from 'react';

import { Link, NavLink } from 'react-router';

import { buttonStyle } from './button.style';
import { ButtonProps } from './button.types';

export const Button = ({
  children,
  label,
  onClick,
  isLink = true,
  isNavLink = false,
  className = '',
  to = '',
  ...styleProps
}: ButtonProps): ReactElement<HTMLButtonElement | HTMLAnchorElement> => {

  const classN = buttonStyle({ ...styleProps, className });
  const Component = isLink ? ( isNavLink ? NavLink : Link ) : ButtonComponent;

  return <Component
    className={classN}
    onClick={onClick}
    to = {to}
    type='button' >
    { label ?? children }
  </Component>;
};

const ButtonComponent = (props: React.HTMLAttributes<HTMLButtonElement>):
  ReactElement<HTMLButtonElement> => {
  return <button type='button' {...props} />;
};
