import { ChangeEvent, ReactElement, useState } from 'react';
import { TextInputProps } from './text-input.types';
import { inputStyle, labelStyle, wrapperStyle } from './text-input.style';

export const TextInput = ({ label, children }: TextInputProps): ReactElement => {
  const [value, setValue] = useState<string>('');
  const active = !!value;
  const wrapperClass = wrapperStyle({ active });
  const inputClass = inputStyle({ active });
  const labelClass = labelStyle({ active });

  const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    setValue(value);
  };

  return <label className={wrapperClass}>
    <span className={labelClass} >{ label ?? children }</span>
    <input className={inputClass} onChange={handleOnChange} type='text' />
  </label>;
};
