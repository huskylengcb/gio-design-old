import * as React from 'react';
import { Select as AntSelect } from 'antd';
import { SelectProps } from 'antd/lib/select';
import classnames from 'classnames';
import isContain from '../../utils/pinyinHelper';
import { blurActiveElement } from '../../utils/helpers';

import 'antd/lib/select/style/index.css';
import 'antd/lib/style/index.css';
import './custom-style.less';

export const OptGroup = AntSelect.OptGroup;
export const Option = AntSelect.Option;

interface Props extends SelectProps {
  isAutoBlurAfterSelect?: boolean;
  type?: 'ghost'
};

const filterOption = (input: string, child: any): boolean => {
  const option = child.props.children || '';
  return isContain(option.toString(), input);
};

export default class Select extends React.Component<Props, {}> {
  public static OptGroup: any
  public static Option: any

  public render() {
    const {
      children,
      className,
      dropdownClassName,
      isAutoBlurAfterSelect = false,
      onChange,
      onSelect,
      type,
      ...props
    } = this.props;

    let _props = {...props, onChange, onSelect};

    if (isAutoBlurAfterSelect) {
      const blurAfterOnChange = (...args: any[]) => {
        blurActiveElement();
        if (typeof onChange === 'function') {
          onChange.apply(null, args);
        }
      };

      const blurAfterOnSelect = (...args: any[]) => {
        blurActiveElement();
        if (typeof onSelect === 'function') {
          onSelect.apply(null, args);
        }
      };

      _props = {...props, onChange: blurAfterOnChange, onSelect: blurAfterOnSelect};
    }

    return (
      <AntSelect
        className={
          classnames(
            'gio-select',
            {
              [`gio-select-${type}`]: type,
              [className]: !!className
            }
          )
        }
        dropdownClassName={classnames('gio-select-dropdown', {
          [dropdownClassName]: !!dropdownClassName
        })}
        filterOption={filterOption}
        {..._props}
      >
        {children}
      </AntSelect>
    )
  }
};

Select.OptGroup = AntSelect.OptGroup;
Select.Option = AntSelect.Option;
