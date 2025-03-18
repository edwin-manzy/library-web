import { PropsWithChildren } from 'react';

import { ButtonStyleProps } from './button.style';


export interface ButtonProps extends PropsWithChildren, ButtonStyleProps {
  onClick?: VoidFunction,
  label?: string
  isLink?: boolean,
  isNavLink?: boolean,
  to?: string,
  className?: string,
};
