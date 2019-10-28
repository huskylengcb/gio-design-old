import React from 'react';
import { ButtonProps } from 'antd/lib/button';
import { Button as AntButton } from 'antd';
import classnames from 'classnames';

import 'antd/lib/button/style/index.css';
import './custom-style.less';

export interface Props extends ButtonProps {
  type?: 'primary'
  size?: 'large'
}

class Button extends React.PureComponent<Props> {
  public render() {
    return (
      <AntButton
        {...this.props}
        className={
          classnames(
            'gio-button',
            `gio-button-${this.props.type}`,
            this.props.className
          )
        }
      />
    )
  }
}

export default Button;