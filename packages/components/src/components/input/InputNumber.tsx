import React from 'react';
import { InputNumber as AntInputNumber } from 'antd';
import classnames from 'classnames';
import { InputNumberProps } from 'antd/lib/input-number';

interface Props extends InputNumberProps {
  inverse?: boolean
}

export default class InputNumber extends React.Component<Props> {
  public render() {
    const {
      className,
      disabled,
      inverse,
      ...props
    } = this.props;
    return (
    <AntInputNumber
      {...props}
      className={classnames(
        'gio-input-old-number',
        {
          'gio-input-old-inverse': inverse,
          'gio-input-old-disabled': disabled,
          [`${className}`]: className
        }
      )}
    />
    )
  }
}
