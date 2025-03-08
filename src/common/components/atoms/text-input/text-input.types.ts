import { PropsWithChildren } from 'react';

export interface TextInputProps extends PropsWithChildren {
  label?: string,
  wrapperClass?: string,
  labelClass?: string,
};
