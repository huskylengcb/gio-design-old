import React from 'react';
import { DatePicker as AntDatePicker } from 'antd';
import classnames from 'classnames';
import Icon from '@gio-design/icon';
import { Moment } from 'moment';
import { DatePickerProps } from 'antd/lib/date-picker/interface';

import 'antd/lib/date-picker/style/index.css';
import './custom-style.less';

export interface Props extends DatePickerProps {
  startOfDay?: boolean
}

const DatePicker: React.FC<Props> = ({
  className,
  placeholder = '请选择日期',
  allowClear = false,
  startOfDay = true,
  onChange,
  ...rest
}) => {

  const handleChange = (moment: Moment, dateString: string) => {
    onChange && onChange(startOfDay ? moment.startOf('day') : moment, dateString);
  }

  return (
    <AntDatePicker
      className={classnames('gio-date-picker-old', className)}
      placeholder={placeholder}
      allowClear={allowClear}
      suffixIcon={<Icon type='calendar' className='gio-date-picker-old-icon' />}
      onChange={handleChange}
      {...rest}
    />
  );
}

export default DatePicker;