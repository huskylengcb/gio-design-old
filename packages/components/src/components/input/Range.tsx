import React, { useState } from 'react';
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
  const [tempValues, setTempValues] = useState(values);
  const inputWidth = Math.max((width || 0) - labelStyle.width / 2, 50);

  const handleChange = (type: 'min' | 'max') =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const [min, max] = tempValues;
      const value = e.target.value;
      let values;
      if (type === 'min') {
        values = [value, max];
        setTempValues(values);
        onChange(values, value, type);
      } else {
        values = [min, value];
        setTempValues(values);
        onChange(values, value, type);
      }
    }

  return (
    <Input.Group className='gio-input-range'>
      <Input
        value={min}
        size={size}
        placeholder={minPlaceholder}
        className='gio-input-range-min'
        style={{ width: inputWidth }}
        onChange={handleChange('min')}
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
        onChange={handleChange('max')}
      />
      <div className='gio-input-range-wrapper' />
    </Input.Group>
  );
}

export default Range;