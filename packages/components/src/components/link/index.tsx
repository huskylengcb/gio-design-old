import React from 'react';
import classnames from 'classnames';
import './custom-style.less';

const noop = (): undefined => void 0;

export interface Props {
  inverse?: boolean;
  className?: string;
  disabled?: boolean;
  [key: string]: any;
}

const Link: React.FC<Props> = (props) => {
  const { inverse, className, disabled, href, onClick, ...rest } = props;
  return (
    <a
      {...rest}
      className={classnames(
        'gio-link-old',
        className,
        {
          'gio-link-old-inverse': inverse,
          'gio-link-old-disabled': disabled
        }
      )}
      href={disabled ? undefined : href}
      onClick={disabled ? noop : onClick}
    >
      {props.children}
    </a>
  )
}

export default Link;