import React from 'react';
import Input, { InputProps } from './Input';

export interface Props extends InputProps {
  values: string[],
  minPlaceholder?: string;
  maxPlaceholder?: string;
  width?: number,
  label?: string;
  onChange?: (values: string[], value: string, type: 'min' | 'max') => void;
}

const labelStyle = {
  width: 30,
  textAlign: 'center',
  cursor: 'default'
}

const handleValuesChange = (type: 'min' | 'max', onChange: any) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    console.info(e.target.value);
  }

const Range: React.FC<Props> = ({
  values = [],
  size = 'small',
  width,
  label = '-',
  minPlaceholder,
  maxPlaceholder,
  onChange
}) => {
  const [min, max] = values;
  const inputWidth = Math.max((width || 0) - labelStyle.width / 2, 50);
  return (
    <Input.Group className='gio-input-range'>
      <Input
        value={min}
        size={size}
        placeholder={minPlaceholder}
        className='gio-input-range-min'
        style={{ width: inputWidth }}
        onChange={handleValuesChange('min', onChange)}
      />
      <Input
        size={size}
        style={labelStyle}
        placeholder={label}
        disabled={true}
      />
      <Input
        value={max}
        size={size}
        placeholder={maxPlaceholder}
        className='gio-input-range-min'
        style={{ width: inputWidth }}
        onChange={handleValuesChange('max', onChange)}
      />
      <div className='gio-input-range-wrapper' />
    </Input.Group>
  );
}

export default Range;