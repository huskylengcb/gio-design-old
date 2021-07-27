import React, { ChangeEvent } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input';
import classnames from 'classnames';
import Icon from '@gio-design-old/icon';

const SearchInput = Input.Search;

interface Props extends SearchProps {
  inverse?: boolean
}

export default class Search extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    onSearch: () => void 0
  }

  public handleSearch = (e: ChangeEvent<HTMLInputElement>) => 
    this.props.onSearch && this.props.onSearch(e.target.value);

  public render() {
    const {
      className,
      disabled,
      inverse,
      ...props
    } = this.props;
    return (
    <SearchInput
      size='large'
      {...props}
      onChange={this.handleSearch}
      onSearch={void 0}
      className={classnames(
        'gio-input-old',
        'gio-input-old-search',
        {
          'gio-input-old-inverse': inverse,
          'gio-input-old-disabled': disabled,
          [`${className}`]: className
        }
      )}
      suffix={<Icon size={18} type='search'/>}
    />
    )
  }
}