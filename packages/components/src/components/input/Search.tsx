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
    return (
    <SearchInput
      size='large'
      {...this.props}
      onChange={this.handleSearch}
      onSearch={void 0}
      className={classnames(
        'gio-input',
        'gio-input-search',
        {
          'gio-input-inverse': this.props.inverse,
          'gio-input-disabled': this.props.disabled,
          [`${this.props.className}`]: this.props.className
        }
      )}
    />
    )
  }
}