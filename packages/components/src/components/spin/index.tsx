import React from 'react';
import { Spin as AntSpin } from 'antd';
import { SpinProps } from 'antd/lib/spin';
import classnames from 'classnames';

import 'antd/lib/spin/style/index.css'
import './custom-style.less';

export interface Props extends SpinProps {
}

const Spin: React.FC<Props> = (props) => (
  <AntSpin
    {...props}
    className={classnames(
      'gio-spin-old', props.className
    )}
  />
);

export default Spin
