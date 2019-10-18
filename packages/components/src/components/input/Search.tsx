import React, { ChangeEvent } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input';

const SearchInput = Input.Search;

export default class Search extends React.Component<SearchProps> {
  public static defaultProps: Partial<SearchProps> = {
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
      className={`gio-input-search ${this.props.className}`}
    />
    )
  }
}