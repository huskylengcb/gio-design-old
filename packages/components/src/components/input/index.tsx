import * as React from 'react';
import { Input as AntInput } from 'antd';
import classnames from 'classnames';
import { omit } from 'lodash';
import 'antd/lib/input/style/index.css';
import './index.less';

export interface InputProps {
  className?: string,
  disabled?: boolean,
  size?: 'large' | 'small'
  [key: string]: any,
  error?: boolean
};

class Input extends React.Component<InputProps> {
  public render() {
    const className = classnames(
      'gio-input',
      this.props.className,
      {
        ['gio-input--error']: this.props.error,
        large: this.props.size === 'large',
        small: this.props.size === 'small'
      }
    )
    return (
      <AntInput
        {...omit(this.props, ['error'])}
        className={className}
      />
    );
  }
}

export default Input
