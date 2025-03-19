import { VariantProps } from 'class-variance-authority';
import { PropsWithChildren } from 'react';

import { wrapperStyle } from './text-input.style';

export type StyleProps = VariantProps< typeof wrapperStyle >

export interface TextInputProps extends PropsWithChildren, StyleProps {
  label?: string,
  wrapperClass?: string,
  labelClass?: string,
  type?: 'text' | 'password',
  onChange: ((value: string) => void) | undefined,
};
