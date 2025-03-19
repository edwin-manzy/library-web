import { ChangeEvent, ReactElement, useState } from 'react';

import { inputStyle, labelStyle, wrapperStyle } from './text-input.style';
import { TextInputProps } from './text-input.types';

export const TextInput = ({ label, children,
  onChange, type = 'text', wrapperClass: wClass, ...props }: TextInputProps):
ReactElement => {
  const [value, setValue] = useState<string>('');
  const active = !!value;
  const wrapperClass = wrapperStyle({ active, ...props, className: wClass });
  const inputClass = inputStyle({ active });
  const labelClass = labelStyle({ active });

  const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return <label className={wrapperClass}>
    <span className={labelClass} >{ label ?? children }</span>
    <input className={inputClass} onChange={handleOnChange} type={type} />
  </label>;
};
