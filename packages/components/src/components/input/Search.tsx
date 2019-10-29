import React, { ChangeEvent } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input';
import classnames from 'classnames';

const SearchInput = Input.Search;

interface Props extends SearchProps {
  inverse?: boolean
}

export default class Search extends React.Component<Props> {
  public static defaultProps: Partial<Props> = {
    onSearch: (v: string) => void 0
  }

  public handleSearch = (e: ChangeEvent<HTMLInputElement>) => this.props.onSearch(e.target.value);

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
        'gio-input',
        'gio-input-search',
        {
          'gio-input-inverse': inverse,
          'gio-input-disabled': disabled,
          [`${className}`]: className
        }
      )}
    />
    )
  }
}