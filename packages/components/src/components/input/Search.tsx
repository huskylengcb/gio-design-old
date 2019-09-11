import React, { ChangeEvent } from 'react';
import { Input } from 'antd';
import { SearchProps } from 'antd/lib/input';
import { debounce } from 'lodash';

const SearchInput = Input.Search;

export default class Search extends React.Component<SearchProps> {
  public static defaultProps: Partial<SearchProps> = {
    onSearch: (v: string) => void 0
  }

  public debouncedSearch = debounce(this.props.onSearch, 300)

  public handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
    this.debouncedSearch(e.target.value);

  public render() {
    return (
    <SearchInput
      {...this.props}
      onChange={this.handleSearch}
      onSearch={void 0}
      className={`gio-input-search ${this.props.className}`}
      size='large'
    />
    )
  }
}