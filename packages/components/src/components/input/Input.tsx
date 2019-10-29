import * as React from 'react';
import { Input as AntInput } from 'antd';
import { SearchProps, TextAreaProps } from 'antd/lib/input';
import classnames from 'classnames';
import { omit } from 'lodash';
import 'antd/lib/input/style/index.css';
import './custom-style.less';
export interface InputProps {
  className?: string;
  disabled?: boolean;
  size?: 'large' | 'small';
  [key: string]: any;
  error?: boolean;
  inverse?: boolean;
};

class Input extends React.Component<InputProps> {
  public static Search: React.ClassType<SearchProps, any, any>
  public static TextArea: React.ClassType<TextAreaProps, any, any>
  public render() {
    const className = classnames(
      'gio-input',
      this.props.className || '',
      {
        [`gio-input-${this.props.size}`]: this.props.size,
        'gio-input--error': this.props.error,
        'gio-input-inverse': this.props.inverse
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

export const TextArea = AntInput.TextArea
export default Input
